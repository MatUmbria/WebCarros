import { useState, useEffect, useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Container } from "../../components/container";
import { DashboardHeader } from "../../components/panelheader";
import { collection, getDocs, where, query, deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../services/firebaseConnection";
import { ref, deleteObject } from "firebase/storage";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

interface CarProps{
  id: string;
  name: string;
  year: string;
  uid: string;
  price: string | number;
  city: string;
  km: string;
  images: ImageCarProps[];
}

interface ImageCarProps{
  name: string;
  uid: string;
  url: string;
}

export function Dashboard(){
  const [cars, setCars] = useState<CarProps[]>([]);
  const { user } = useContext(AuthContext);
  const [loadImages, setLoadImages] = useState<string[]>([])


  useEffect(() => {
    function loadCars(){
      if (!user?.uid){
        return;
      }
      const carsRef = collection(db, "cars")
      const queryRef = query(carsRef, where("uid", "==", user.uid))

      getDocs(queryRef)
      .then((snapshot) => {
        let listcars = [] as CarProps[];

        snapshot.forEach( doc => {
          listcars.push({
            id: doc.id,
            name: doc.data().name,
            year: doc.data().year,
            uid: doc.data().uid,
            price: doc.data().price,
            city: doc.data().city,
            km: doc.data().km,
            images: doc.data().images
          })
        })

        setCars(listcars);
        console.log(listcars)

      })
    }

    loadCars();

  }, [user, cars])

  function handleImageLoad(id: string){
    setLoadImages((prevImageLoaded) => [...prevImageLoaded, id])
  }

  async function handleDeleteCar(car: CarProps) {
    const docRef = doc(db, "cars", car.id)
    await deleteDoc(docRef);

    car.images.map( async (image) => {
      const imagePath = `images/${image.uid}/${image.name}`
      const imageRef = ref(storage, imagePath)

      try{
        await deleteObject(imageRef)
      }catch(err){
        console.log("ERRO AO EXCLUIR IMAGEM")
      }
    })

    setCars(cars.filter(car => car.id !== car.id))
  }

  return(
    <Container>
      <DashboardHeader/>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map(car => (
              <section key={car.id} className="w-full bg-white rounded-lg relative">
                <button 
                  onClick={() => handleDeleteCar(car)}
                  className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 drop-shadow">
                  <FiTrash2 size={26} color="#000" />
                </button>
                <div 
                className="w-full h-72 rounded-lg mb-2 max-h-72 bg-slate-200"
                style={{ display: loadImages.includes(car.id) ? "none" : "block" }}
                ></div>
                
                <img 
                  className="w-full rounded-lg mb-2 max-h-72"
                  src={car.images[0].url}
                  alt={car.name} 
                  onLoad={ () => handleImageLoad(car.id) }
                  style={{ display: loadImages.includes(car.id) ? "block" : "none" }}
                />
                <Link to={`/car/${car.id}`}>
                <p className="font-bold mt-1 mb-2 px-2">{car.name}</p>

                <div className="flex flex-col px-2">
                  <span className="text-zinc-700 mb-6">Ano {car.year} | {car.km} km</span>
                  <strong className="text-black font-medium text-xl">R$ {car.price}</strong>
                </div>

                <div className="w-full h-px bg-slate-300 my-2"></div>

                <div className="px-2 pb-2">
                  <span className="text-black">
                    {car.city}
                  </span>
                </div>
                </Link>
              </section>
            
          ))}

          
        </main>
    </Container>
  )
}
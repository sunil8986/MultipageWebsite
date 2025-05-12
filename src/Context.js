import React, { createContext, useEffect, useState } from 'react';

const Mydata = createContext();

const Context = ({children}) => {



    const API = 'https://dummyjson.com/recipes';
    // 2. Dynamic API content (like services list)
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let fetchApiData  = async () => {
        try {
            const res = await fetch(API); // Adjust the endpoint as needed
            if (!res.ok) throw new Error("Something went wrong!");
            const data = await res.json();
            setApiData(data);
        }catch (err) {
            console.error(err);
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApiData();
    }, []);

    const staticServices = [
        {
          id: 1,
          title: "Development",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "António Capelo",
          image_url: "../img/service/ser1.png"
        },
        {
          id: 2,
          title: "Prototype",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "José Tavares",
          image_url: "../img/service/ser2.png"
        },
        {
          id: 3,
          title: "Support",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "Pedro Almeida",
          image_url: "../img/service/ser7.jpg"
        },
        {
          id: 4,
          title: "Sketch",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "Marta Fernandes",
          image_url: "../img/service/ser4.png"
        },
        {
          id: 5,
          title: "Wireframe",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "Luís Couto",
          image_url: "../img/service/ser5.png"
        },
        {
          id: 6,
          title: "Mobile",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "César Aguiar",
          image_url: "../img/service/ser6.jpg"
        }
      ];
      

    let heroData = {
        home: {
            image: '../img/2.png',
            title: 'Creative and Quality is Our Services',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
            linkText: 'Get Started',
            linkUrl: '/'
        },
        about: {
            image: '../img/1.jpg',
            title: 'About us',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            linkText: 'Get Started',
            linkUrl: '/contact'
        },
        service: {
            image: '../img/3.png',
            title: 'Our Services',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            linkText: 'Get Started',
            linkUrl: '/contact'
        }
    };

    let AllData = {
        heroData,
        apiData,
        loading,
        error,
        staticServices
    }
    
    return (
    <>
        <Mydata.Provider value={AllData}>
            {children}
        </Mydata.Provider>
    </>
  )
}

export default Context;
export {Mydata};
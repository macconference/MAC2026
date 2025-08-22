import React from "react";

const Map = () => {
  return (
    <>
      {/*
<div className='mt-6 p-2'>
        <h2 className='text-center text-2xl md:text-3xl font-extrabold'>
            <span className='border-b-4 border-orange-400 pb-2 px-2 md:px-8'>
            How to Reach
            </span>
        </h2>
    <div className='p-2 pt-8 lg:text-lg lg:px-16'>
    <p className='text-justify'>
    Prayagraj (Formerly Known as Allahabad) is situated in the north part of India in the state of Uttar Pradesh. It is well connected with flights, rail and road transport to other parts of India. Daily trains, buses and flights are available from major cities in India.
        </p>
        <br/>
        <p className='text-justify'>
        <span className='font-bold'>Prayagraj (Formerly Known as Allahabad) By Air</span>
        <br />
Allahabad has its own domestic airport which is 15 km away from the heart of the city. Airport is connected to metros like Delhi, Kolkata and Lucknow. Airport to city taxi charge is about Rs 400. Abroad travelers need to get connection flights from Delhi or Kolkata.


        </p>
        <br/>
        <p className='text-justify'>
        <span className='font-bold'>Prayagraj By Train</span>
        <br />
Railway station in Prayagraj (Allahabad Junction) is a major railway station of north India and is situated in the heart of the city. The railway station is very well connected to all the important cities in India.
        </p>
        <br/>
        <p className='text-justify '>
        <span className='font-bold'>Prayagraj By Bus</span>
        <br />
Very good road services are available in Allahabad. UPSRTC buses give service to most of the cities in Uttar Pradesh. From Allahabad bus services are available to Lucknow (200 KM), Kanpur (200KM), Delhi (650 km) and Kolkata (800 km) etc.
        </p>
        
        <div className="w-full flex justify-center my-8 lg:my-14">
 
      <img className="object-cover object-center" alt="hero" src="/undercons.webp"/>
    </div>
    {/*
        <p className='text-justify '>
        <span className='font-bold'>About the city</span>
        <br />
The city is a primary center for culture, religion and education. The confluence of Ganga, Yamuna and mythical Saraswati rivers defines this city. Many national and regional headquarters of administration, military and research facilities are located in the city. 
<br /> 
Allahabad is also famous for producing 7 out of 14 Prime Ministers of India - Jawahar Lal Nehru, Lal Bahadur Shastri, Indira Gandhi, Rajiv Gandhi, Gulzari Lal Nanda, Vishwanath Pratap Singh and Chandrashekhar, they all were either born in Allahabad, were alumni of Allahabad University or were elected from a constituency in Allahabad. 
<br /> 
Climate: (Sept) Moderately Hot. Temperature varies from 15 to 390C. Languages spoken: Hindi, Urdu, English Tourist attractions: Sangam(confluence of rivers), All Saints Cathedral, Alfred Park, Khusro Bagh, Yamuna Bridge, Public Library (estd 1864), Allahabad University (estd 1887), etc. <br /> 
For more information please visit the website of Uttar Pradesh Tourism.
        </p>
    </div>
    </div>
    */}
      <section
        id="venue"
        className="text-blue-600 dark:text-blue-400 body-font relative mx-6 pb-16"
      >
        <div className=" px-0 sm:px-5 py-2 mt-8 md:mx-4 lg:mx-12 ">
          <div className="mt-8 pb-4 flex flex-col items-center justify-center">
            <h1 className="title-font text-center font-bold text-3xl sm:text-4xl text-gray-900 dark:text-gray-100 border-b-4 border-blue-500 dark:border-blue-400 pb-1 md:pb-2">
              Venue
            </h1>
          </div>
          <div className="w-full h-[400px] md:h-[580px] bg-white dark:bg-gray-800 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 contrast-125 grayscale-0 brightness-75 dark:brightness-50 dark:contrast-100"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.630879498129!2d81.86363567520296!3d25.493047722149165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985323dfd8c5e9d%3A0xf0de3a2730b4d24f!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%20(MNNIT)%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211004!5e0!3m2!1sen!2sin!4v1717886560000!5m2!1sen!2sin" 
            ></iframe>
            <div className="bg-blue-50 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 relative py-6 rounded shadow-lg dark:shadow-gray-900/50">
              <div className=" px-6">
                <h2 className="title-font text-base font-bold text-gray-900 dark:text-gray-100 tracking-widest">
                  ADDRESS
                </h2>
                <p className="mt-1 font-medium text-gray-900 dark:text-gray-200">
                  MNNIT Allahabad, U.P. India{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;

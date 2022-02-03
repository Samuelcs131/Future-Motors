import Image from "next/image";

const Imagery = () => {
    return ( 
        <section id="imagery">
            <Image id="img-id" src="/img/main-car/lexus-lf30-gallery-2.png" layout="" width={480} height={270}/>
            <Image src="/img/main-car/lexus-lf30-gallery-3.png" layout="" width={480} height={270}/>
            <Image src="/img/main-car/lexus-lf30-gallery-4.png" layout="" width={480} height={270}/>
            <Image src="/img/main-car/lexus-lf30-gallery-5.png" layout="" width={480} height={270}/>
        </section>
     );
}
 
export default Imagery;
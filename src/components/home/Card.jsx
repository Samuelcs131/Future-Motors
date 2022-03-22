import Image from "next/image";
import Link from "next/link";

const Card = ({dataCard}) => {
    return ( 
        <div className="card">
            <Image src={dataCard.image} priority layout="responsive" width={400} height={225}/>
            <div className="card-info">
                <h4>{dataCard.name}</h4>
                <span>{dataCard.price}</span>
                <div className="btn-group">
                    <Link href="/cart"><a>Add Cart</a></Link>
                    <Link href="/car"><a>Customize</a></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Card;
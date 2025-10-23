export default function Card(props) {

  const handleaddcart =async()=>{
     const link = "https://www.swiggy.com/restaurants/sharief-bhai-frazer-town-bangalore-63048?restaurant_id=63048&source=collection&query=Biryani"; // Replace with your desired link
    window.location.href = link;
  }

  return (
    <div>
      <div className="card m-2" style={{ "width": "18rem","maxHeight": "100", objectFit: "contain" ,backgroundColor:"black"}}>
        <img src={props.fooditem.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title text-white">{props.fooditem.name}</h5>

          <div className='container'>
          
            <div className='d-inline h-100 fs-5 text-white'>
            Total Price: Rs /-
            </div>
          </div>
          <hr></hr>
          <button className={'btn btn-success justify-center ms-2 text-white'}onClick={handleaddcart} >
            Oder Now
          </button>
        </div>
      </div>
    </div>
  )
}

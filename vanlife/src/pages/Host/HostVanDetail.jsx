import React from "react";
import { useParams, Link, Outlet } from "react-router-dom"

export default function HostVanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                {van ? (
                <div className="host-van-detail">
                    <img src={van.imageUrl} alt={`Photo of a van called ${van.name}`}/>
                    <div className="host-van-detail-info-text">                
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <Link to=".">Details</Link>
                        <Link to="pricing">Pricing</Link>
                        <Link to="photos">Photos</Link>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
                <Outlet />
            </div>
        </section>
    )
}
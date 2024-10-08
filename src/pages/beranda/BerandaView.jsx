import React from 'react';
import { Link } from 'react-router-dom';


const BerandaView = ({ubahCari, cariProduct, hasilCari, hasilFilter}) => {

    return (
      <center>
        <div className="beranda dark:bg-black">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow cari"
              placeholder="Search"
              onChange={(input) => ubahCari(input.target.value)}
            />
          </label>
          <p><center>Hasil dari : {cariProduct}</center></p>
          <p><center>Ditemukan : {hasilCari?.founded}</center></p>
    
          <div className="grid grid-cold-2 lg:grid-cols-3 gap-5">
            {/* {product?.restaurants?.map((product) => (
            ))} */}
            {hasilFilter?.restaurants?.map((product, index) => {
              return (
                <div className="" key={product?.name}>
                  <div className="card bg-purple-400 dark:bg-slate-500 dark:text-white w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={`https://restaurant-api.dicoding.dev/images/small/${product.pictureId}`}
                        alt=""
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{product.name}</h2>
                      <p className="line-clamp-3">{product.description}</p>
                      <div className="card-actions justify-end">
                        <Link
                          to={"/detail/" + product.id}
                          className="btn btn-primary">
                          View Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </center>  
      );
    };

export default BerandaView
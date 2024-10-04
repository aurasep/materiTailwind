import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const NegaraView = ({ ubahCari, cariProduct, hasilCari, hasilFilter }) => {
  try {
    return (
      <center>
        <div className="beranda">
          {/* Beranda */}
          <label className="input input-bordered flex items-center">
            <input
              type="text"
              className="grow cari"
              placeholder="Search"
              onChange={(input) => ubahCari(input.target.value)}
            />
          </label>
          <p><center>Hasil dari : {cariProduct}</center></p>
          <p><center>ditemukan : {hasilCari?.founded}</center></p>
          <div className="grid grid-cold-2 lg:grid-cols-3 gap-5">
            {hasilFilter?.map((product, index) => (
              <div className="card bg-base-100 w-96 shadow-xl" key={index}>
                <figure className="px-10 pt-10">
                  <img
                    src={product.flag} 
                    alt="Shoes" 
                    className="rounded-xl"
                    />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product.name}</h2>
                  <h2 className="card-title">{product.currency}</h2>
                  <p className="line-clamp-3">{product.population}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={"/rincian/${product.id}"}
                      className="btn btn-primary"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </center>
    );
  } catch (error) {
    console.log(error);
  };
};
export default NegaraView;

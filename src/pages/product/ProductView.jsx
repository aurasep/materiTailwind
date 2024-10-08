import { Link } from "react-router-dom";

export default function ProductView({ data }) {
  try {
    return (
      <center>
        <div className="product dark:bg-black">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow cari"
              placeholder="Search"
              onChange={(input) => ubahCari(input.target.value)}
            />
          </label>

          <div className="grid grid-cold-2 lg:grid-cols-3 gap-5">
            {data?.map((product, index) => (
              <div
                className="card bg-purple-400 dark:bg-slate-500 dark:text-white w-96 shadow-xl"
                key={index}
              >
                <figure>
                  <img src={product.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="line-clamp-3">{product.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={"/detail/" + product.id}
                      className="btn btn-primary"
                    >
                      Detail
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
  }
}

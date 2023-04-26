import "../css/home.css";

const ProductOfferings = () => {
  return (
    <>
      <div className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-8">
          <div>
            <div className="block h-96  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personal Request
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Order a meal for your lunch or supper. You can also give us the
                time you want that meal delivered and we will get you sorted.
              </p>
            </div>
          </div>
          <div>
            <div className="block h-96 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Love Package
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                You can order a meal for a friend, business partner or that
                special friend. You can attach a special message to be delivered
                with that special package.
              </p>
            </div>
          </div>
          <div>
            <div className="block h-96 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                For the team
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Why not say thank you to your team, business colleages or
                classmate? We will prepare special packages to deliver to them
                just the way you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOfferings;

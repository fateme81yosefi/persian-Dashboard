import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import MultiSelect from '../components/Forms/MultiSelect';
import SelectGroupTwo from '../components/Forms/SelectGroup/SelectGroupTwo';

const AddMember = () => {
  return (
    <>
      <Breadcrumb pageName="افزودن عضو" />

      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                فرم افزودن عضو
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی خود را وارد کنید."
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      کد پرسنلی
                    </label>
                    <input
                      type="text"
                      placeholder="کد پرسنلی را وارد کنید"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                     <div className="flex flex-col gap-5.5 p-6.5">
                      <SelectGroupTwo />
                    </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      کد پرسنلی
                    </label>
                    <input
                      type="text"
                      placeholder="کد پرسنلی را وارد کنید"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMember;

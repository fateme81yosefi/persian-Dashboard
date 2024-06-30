import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import useLogin from '../hooks/useLogin';

const AddAdmin = () => {

  const { } = useLogin();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setE] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <>
      <Breadcrumb pageName="افزودن ادمین" />

      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              فرم افزودن ادمین
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  نام کامل
                </label>
                <input
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  شماره همراه
                </label>
                <input
                  type="text"
                  placeholder="شماره همراه خود را وارد کنید"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  رمز عبور
                </label>
                <input
                  type="password"
                  placeholder="رمز عبور را وارد کنید"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAdmin;

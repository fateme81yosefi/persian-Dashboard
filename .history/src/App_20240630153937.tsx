import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import AddAdmin from './pages/AddAdmin';
import AddMember from './pages/AddMember';
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();


  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        index
        element={
          <>
            <PageTitle title="ورود" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/dashboard"
        element={
          <>
            <DefaultLayout>
              <PageTitle title="داشبورد تجارت الکترونیک" />
              <ECommerce />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/addAdmin"
        element={
          <>
            <DefaultLayout>
              <PageTitle title="افزودن ادمین" />
              <AddAdmin />
            </DefaultLayout>
          </>
        }
      />
      
      <Route
        path="/AddMember"
        element={
          <>
            <DefaultLayout>
              <PageTitle title="افزودن عضو" />
              <AddMember />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/calendar"
        element={
          <>
            <DefaultLayout>
              <PageTitle title="تقویم" />
              <Calendar />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <DefaultLayout>
              <PageTitle title="پروفایل" />
              <Profile />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/forms/form-elements"
        element={
          <>
            {' '}
            <DefaultLayout>
              <PageTitle title="عناصر فرم" />
              <FormElements />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/forms/form-layout"
        element={
          <>
            {' '}
            <DefaultLayout>
              <PageTitle title="لایه های فرم" />
              <FormLayout />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/tables"
        element={
          <>
            <DefaultLayout>
              <PageTitle title="جداول" />
              <Tables />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/settings"
        element={
          <>
            <DefaultLayout>
              <PageTitle title="تنظیمات" />
              <Settings />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/chart"
        element={
          <>
            {' '}
            <DefaultLayout>
              <PageTitle title="چارت پایه" />
              <Chart />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/ui/alerts"
        element={
          <>
            {' '}
            <DefaultLayout>
              <PageTitle title="هشدار ها" />
              <Alerts />
            </DefaultLayout>
          </>
        }
      />
      <Route
        path="/ui/buttons"
        element={
          <>
            {' '}
            <DefaultLayout>
              <PageTitle title="دکمه ها" />
              <Buttons />
            </DefaultLayout>
          </>
        }
      />
      {/*   <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="ثبت نام" />
              <SignUp />
            </>
          }
        />*/}
    </Routes>
  );
}

export default App;

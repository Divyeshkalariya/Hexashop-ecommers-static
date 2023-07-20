import { Fragment,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Layout from './Layout';
import Home from './Componants/customer/pages/Home';
import Aboutus from './Componants/customer/pages/Aboutus';
import Products from './Componants/customer/pages/Products';
import Contactus from './Componants/customer/pages/Contactus';
import Account from './Componants/customer/pages/Account';
import Pagenotfound from './Componants/customer/pages/Pagenotfound';
import Help from './Componants/customer/pages/Help';
import Faqs from './Componants/customer/pages/Faqs';
import Tracking from './Componants/customer/pages/Tracking';

// admin side
import AdminLogin from './Componants/admin/pages/Admin-Login';
import AdminLayout from './Admin-Layout';
import AdminForgotPassword from './Componants/admin/pages/Admin-Forgot-Password';
import AdminAddCategory from './Componants/admin/pages/Admin-Add-Category';
import AdminAddSlider from './Componants/admin/pages/Admin-Add-Slider';
import AdminAddProduct from './Componants/admin/pages/Admin-Add-Product';
import AdminManageCustomer from './Componants/admin/pages/Admin-Manage-Customer';
import AdminManageCategory from './Componants/admin/pages/Admin-Manage-Category';
import AdminManageSlider from './Componants/admin/pages/Admin-Manage-Slider';
import AdminManageProduct from './Componants/admin/pages/Admin-Manage-Product';
import AdminManageOrders from './Componants/admin/pages/Admin-Manage-Orders';
import AdminManageReviews from './Componants/admin/pages/Admin-Manage-Reviews';
import AdminManageContact from './Componants/admin/pages/Admin-Manage-Contact';
import AdminManageFooter from './Componants/admin/pages/Admin-Manage-Footer';
import AdminChangePassword from './Componants/admin/pages/Admin-Change-Password';
import AdminLogout from './Componants/admin/pages/Admin-logout';
import AdminAddSubCategory from './Componants/admin/pages/Admin-Add-Sub-Category';
import AdminManageSubCategory from './Componants/admin/pages/Admin-Manage-Sub-Category';
import AdminAddState from './Componants/admin/pages/Admin-Add-State';
import AdminManageState from './Componants/admin/pages/Admin-Manage-State';
import AdminAddCity from './Componants/admin/pages/Admin-Add-City';
import AdminManageCity from './Componants/admin/pages/Admin-Manage-City';
import AdminDeletCustomer from './Componants/admin/pages/Admin-Delet-Customer';
import AdminDeletContact from './Componants/admin/pages/Admin-Delet-Contact';
import AdminDeletCategory from './Componants/admin/pages/Admin-Delet-Category';
import AdminDeletSubCategory from './Componants/admin/pages/Admin-Delet-Sub-Category';
import AdminDeletState from './Componants/admin/pages/Admin-Delet-State';
import AdminDeletCity from './Componants/admin/pages/Admin-Delet-City';
import AdminDeletSlider from './Componants/admin/pages/Admin-Delet-Slider';
import AdminUpdateCategory from './Componants/admin/pages/Admin-Update-Category';
import AdminUpdateSubCategory from './Componants/admin/pages/Admin-Update-Sub-Category';




function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
        {/* customer side */}
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/Help" element={<Help/>}/>
          <Route path="/Faqs" element={<Faqs/>}/>
          <Route path="/Tracking" element={<Tracking/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
          </Route>

          {/* admin side */}
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/admin-login/admin-forgot-password' element={<AdminForgotPassword/>}/>
          <Route path='/admin-login/admin-change-password' element={<AdminChangePassword/>}/>
          <Route path='/admin-login/admin-dashboard' element={<AdminLayout/>}/>
          {/* add */}
          <Route path="/admin-login/admin-add-category" element={<AdminAddCategory/>}/>
          <Route path="/admin-login/admin-add-subcategory" element={<AdminAddSubCategory/>}/>
          <Route path="/admin-login/admin-add-products" element={<AdminAddProduct/>}/>
          <Route path="/admin-login/admin-add-slider" element={<AdminAddSlider/>}/>
          <Route path="/admin-login/admin-add-state" element={<AdminAddState/>}/>
          <Route path="/admin-login/admin-add-city" element={<AdminAddCity/>}/>
          {/* manage */}
          <Route path="/admin-login/admin-manage-slider" element={<AdminManageSlider/>}/>
          <Route path="/admin-login/admin-manage-category" element={<AdminManageCategory/>}/>
          <Route path="/admin-login/admin-manage-subcategory" element={<AdminManageSubCategory/>}/>
          <Route path="/admin-login/admin-manage-customer" element={<AdminManageCustomer/>}/>
          <Route path="/admin-login/admin-manage-products" element={<AdminManageProduct/>}/>
          <Route path="/admin-login/admin-manage-state" element={<AdminManageState/>}/>
          <Route path="/admin-login/admin-manage-city" element={<AdminManageCity/>}/>
          <Route path="/admin-login/admin-manage-orders" element={<AdminManageOrders/>}/>
          <Route path="/admin-login/admin-manage-reviews" element={<AdminManageReviews/>}/>
          <Route path="/admin-login/admin-manage-contact" element={<AdminManageContact/>}/>
          <Route path="/admin-login/admin-manage-footer" element={<AdminManageFooter/>}/>
          {/* update */}
          <Route path="admin-login/admin-update-category/:id" element={<AdminUpdateCategory/>}/>
          <Route path="/admin-login/admin-update-subcategory/:id" element={<AdminUpdateSubCategory/>}/>
          {/* <Route path="/admin-login/admin-update-subcategory/:id" element={<AdminUpdateSubCategory/>}/> */}
          {/* <Route path="/admin-login/admin-update-subcategory/:id" element={<AdminUpdateSubCategory/>}/> */}
          {/* <Route path="/admin-login/admin-update-subcategory/:id" element={<AdminUpdateSubCategory/>}/> */}
          {/* <Route path="/admin-login/admin-update-subcategory/:id" element={<AdminUpdateSubCategory/>}/> */}
          {/* delet */}
          <Route path="/admin-login/admin-delet-customer/:id" element={<AdminDeletCustomer/>}/>
          <Route path="/admin-login/admin-delet-contact/:id" element={<AdminDeletContact/>}/>
          <Route path="/admin-login/admin-delet-category/:id" element={<AdminDeletCategory/>}/>
          <Route path="/admin-login/admin-delet-subcategory/:id" element={<AdminDeletSubCategory/>}/>
          <Route path="/admin-login/admin-delet-state/:id" element={<AdminDeletState/>}/>
          <Route path="/admin-login/admin-delet-city/:id" element={<AdminDeletCity/>}/>
          <Route path="/admin-login/admin-delet-slider/:id" element={<AdminDeletSlider/>}/>

          <Route path="/admin-login/admin-logout" element={<AdminLogout/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

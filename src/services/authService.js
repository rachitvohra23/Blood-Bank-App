// import { userLogin, userRegister } from "../redux/features/auth/authActions";
// import store from "../redux/store";

// export const handleLogin = (e, email, password, role) => {
//   e.preventDefault();
//   try {
//     if (!role || !email || !password) {
//       return alert("Please Provide All Fields");
//     }
//     store.dispatch(userLogin({ email, password, role }));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const handleRegister = (
//   e,
//   name,
//   role,
//   email,
//   password,
//   phone,
//   organisationName,
//   address,
//   hospitalName,
//   website
// ) => {
//   e.preventDefault();
//   try {
//     store.dispatch(
//       userRegister({
//         name,
//         role,
//         email,
//         password,
//         phone,
//         organisationName,
//         address,
//         hospitalName,
//         website,
//       })
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";
import { toast } from "react-toastify";

// Initialize react-toastify
// toast.configure();
//minor commit change

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return toast.error("Please Provide All Fields");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    toast.error("An error occurred during login");
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    // if (!name || !role || !email || !password || !phone) {
    //   return toast.error("Please Provide All Required Fields");
    // }
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      })
    );
  } catch (error) {
    toast.error("An error occurred during registration");
    console.log(error);
  }
};

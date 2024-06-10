// import React from "react";
// import Layout from "../../components/shared/Layout/Layout";
// import { useSelector } from "react-redux";

// const AdminHome = () => {
//   const { user } = useSelector((state) => state.auth);
//   return (
//     <Layout>
//       <div className="container">
//         <div className="d-felx flex-column mt-4">
//           <h1>
//             Welcome Admin <i className="text-success">{user?.name}</i>
//           </h1>
//           <h3>Manage Blood Bank App </h3>
//           <hr />
//           <p>Welcome to Blood Bank App.Here Admin can manage all the thing.</p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminHome;

// import React from "react";
// import Layout from "../../components/shared/Layout/Layout";
// import { useSelector } from "react-redux";

// const AdminHome = () => {
//   const { user } = useSelector((state) => state.auth);
//   return (
//     <Layout>
//       <div className="container">
//         <div className="d-flex flex-column mt-4">
//           <h1>
//             Welcome Admin <i className="text-success">{user?.name}</i>
//           </h1>
//           <h3>Manage Blood Bank App</h3>
//           <hr />
//           <p>
//             Welcome to the Blood Bank App. This platform serves as a
//             comprehensive solution for managing blood donations, supplies, and
//             transfusions. As an admin, you have the highest level of control,
//             enabling you to oversee and manage all aspects of the system. Your
//             responsibilities include:
//           </p>
//           <ul>
//             <li>
//               <strong>Donor Management:</strong> View and manage the list of
//               donors, including their personal donation histories and the
//               organizations that received their donations.
//             </li>
//             <li>
//               <strong>Hospital Management:</strong> Access and manage the list
//               of hospitals, including their blood supply histories and the
//               organizations that supplied them with blood.
//             </li>
//             <li>
//               <strong>Organization Management:</strong> Oversee the list of
//               organizations, ensuring they properly record blood donations and
//               supplies. You can also monitor their donation and supply
//               histories.
//             </li>
//             <li>
//               <strong>Administrative Actions:</strong> You have the authority to
//               delete any records from the donor, hospital, and organization
//               lists to maintain the accuracy and integrity of the data.
//             </li>
//           </ul>
//           <p>
//             The Blood Bank App also supports various user roles, each with
//             specific functionalities:
//           </p>
//           <ul>
//             <li>
//               <strong>Donors:</strong> Donors can register and log in to view
//               their personal donation history and see which organizations
//               received their donations.
//             </li>
//             <li>
//               <strong>Hospitals:</strong> Hospitals can log in to view their
//               blood supply history and identify the organizations that supplied
//               them with blood.
//             </li>
//             <li>
//               <strong>Organizations:</strong> Organizations can record blood
//               donations, manage their blood supply records, view donation and
//               supply histories, and access donor and hospital information. They
//               can also analyze blood inventory through detailed analytics.
//             </li>
//           </ul>
//           <p>
//             As an admin, your role is crucial in ensuring the smooth operation
//             of the Blood Bank App. Your oversight helps maintain the system's
//             efficiency, accuracy, and reliability. Thank you for your dedication
//             to managing this vital resource, ensuring that blood donations are
//             properly recorded and utilized to save lives.
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminHome;

import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div
        className="container"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="d-flex flex-column mt-4" style={{ color: "#343a40" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "18px",
            }}
          >
            {/* Welcome Admin <b className="text-success">{user?.name}</b> */}
            Welcome Admin <span style={{ color: "purple" }}>{user?.name}</span>
          </h1>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "15px" }}>
            Manage Blood Bank App
          </h3>
          <hr />
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.2",
              marginBottom: "16px",
              fontWeight: "600",
            }}
          >
            Welcome to the Blood Bank App. This platform serves as a
            comprehensive solution for managing blood donations, supplies, and
            transfusions. As an admin, you have the highest level of control,
            enabling you to oversee and manage all aspects of the system. Your
            responsibilities include:
          </p>
          <ul
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.2",
              marginBottom: "18px",
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "8px", fontWeight: "500" }}>
              <strong>Donor Management:</strong> View and manage the list of
              donors, including their personal donation histories and the
              organizations that received their donations.
            </li>
            <li style={{ marginBottom: "8px", fontWeight: "500" }}>
              <strong>Hospital Management:</strong> Access and manage the list
              of hospitals, including their blood supply histories and the
              organizations that supplied them with blood.
            </li>
            <li style={{ marginBottom: "8px", fontWeight: "500" }}>
              <strong>Organization Management:</strong> Oversee the list of
              organizations, ensuring they properly record blood donations and
              supplies. You can also monitor their donation and supply
              histories.
            </li>
            <li style={{ marginBottom: "2px", fontWeight: "500" }}>
              <strong>Administrative Actions:</strong> You have the authority to
              delete any records from the donor, hospital, and organization
              lists to maintain the accuracy and integrity of the data.
            </li>
          </ul>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.2",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            The Blood Bank App also supports various user roles, each with
            specific functionalities:
          </p>
          <ul
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.2",
              marginBottom: "15px",
              paddingLeft: "20px",
            }}
          >
            <li style={{ marginBottom: "4px", fontWeight: "500" }}>
              <strong>Donors:</strong> Donors can register and log in to view
              their personal donation history and see which organizations
              received their donations.
            </li>
            <li style={{ marginBottom: "4px", fontWeight: "500" }}>
              <strong>Hospitals:</strong> Hospitals can log in to view their
              blood supply history and identify the organizations that supplied
              them with blood.
            </li>
            <li style={{ marginBottom: "2px", fontWeight: "500" }}>
              <strong>Organizations:</strong> Organizations can record blood
              donations, manage their blood supply records, view donation and
              supply histories, and access donor and hospital information. They
              can also analyze blood inventory through detailed analytics.
            </li>
          </ul>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.2",
              marginBottom: "0px",
              fontWeight: "500",
            }}
          >
            As an admin, your role is crucial in ensuring the smooth operation
            of the Blood Bank App. Your oversight helps maintain the system's
            efficiency, accuracy, and reliability. Thank you for your dedication
            to managing this vital resource, ensuring that blood donations are
            properly recorded and utilized to save lives.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

// import React from "react";
// import Layout from "../../components/shared/Layout/Layout";
// import { useSelector } from "react-redux";

// const AdminHome = () => {
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <Layout>
//       <div
//         className="container"
//         style={{
//           backgroundColor: "#f8f9fa",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           animation: "fadeIn 1s ease-in-out",
//         }}
//       >
//         <div className="d-flex flex-column mt-4" style={{ color: "#343a40" }}>
//           <h1
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "bold",
//               marginBottom: "18px",
//               color: "#007bff",
//               animation: "slideInFromLeft 1s ease-in-out",
//             }}
//           >
//             Welcome Admin <b className="text-success">{user?.name}</b>
//           </h1>
//           <h3
//             style={{
//               fontSize: "1.75rem",
//               marginBottom: "15px",
//               color: "#17a2b8",
//               animation: "slideInFromRight 1s ease-in-out",
//             }}
//           >
//             Manage Blood Bank App
//           </h3>
//           <hr />
//           <p
//             style={{
//               fontSize: "1.1rem",
//               lineHeight: "1.2",
//               marginBottom: "16px",
//               color: "#6c757d",
//             }}
//           >
//             Welcome to the Blood Bank App. This platform serves as a
//             comprehensive solution for managing blood donations, supplies, and
//             transfusions. As an admin, you have the highest level of control,
//             enabling you to oversee and manage all aspects of the system. Your
//             responsibilities include:
//           </p>
//           <ul
//             style={{
//               fontSize: "1.1rem",
//               lineHeight: "1.5",
//               marginBottom: "18px",
//               paddingLeft: "20px",
//               listStyleType: "square",
//             }}
//           >
//             <li
//               style={{
//                 marginBottom: "8px",
//                 animation: "fadeIn 1.5s ease-in-out",
//               }}
//             >
//               <strong>Donor Management:</strong> View and manage the list of
//               donors, including their personal donation histories and the
//               organizations that received their donations.
//             </li>
//             <li
//               style={{
//                 marginBottom: "8px",
//                 animation: "fadeIn 1.6s ease-in-out",
//               }}
//             >
//               <strong>Hospital Management:</strong> Access and manage the list
//               of hospitals, including their blood supply histories and the
//               organizations that supplied them with blood.
//             </li>
//             <li
//               style={{
//                 marginBottom: "8px",
//                 animation: "fadeIn 1.7s ease-in-out",
//               }}
//             >
//               <strong>Organization Management:</strong> Oversee the list of
//               organizations, ensuring they properly record blood donations and
//               supplies. You can also monitor their donation and supply
//               histories.
//             </li>
//             <li
//               style={{
//                 marginBottom: "8px",
//                 animation: "fadeIn 1.8s ease-in-out",
//               }}
//             >
//               <strong>Administrative Actions:</strong> You have the authority to
//               delete any records from the donor, hospital, and organization
//               lists to maintain the accuracy and integrity of the data.
//             </li>
//           </ul>
//           <p
//             style={{
//               fontSize: "1.1rem",
//               lineHeight: "1.2",
//               marginBottom: "15px",
//               color: "#6c757d",
//             }}
//           >
//             The Blood Bank App also supports various user roles, each with
//             specific functionalities:
//           </p>
//           <ul
//             style={{
//               fontSize: "1.1rem",
//               lineHeight: "1.5",
//               marginBottom: "15px",
//               paddingLeft: "20px",
//               listStyleType: "square",
//             }}
//           >
//             <li
//               style={{
//                 marginBottom: "8px",
//                 animation: "fadeIn 1.9s ease-in-out",
//               }}
//             >
//               <strong>Donors:</strong> Donors can register and log in to view
//               their personal donation history and see which organizations
//               received their donations.
//             </li>
//             <li
//               style={{
//                 marginBottom: "8px",
//                 animation: "fadeIn 2s ease-in-out",
//               }}
//             >
//               <strong>Hospitals:</strong> Hospitals can log in to view their
//               blood supply history and identify the organizations that supplied
//               them with blood.
//             </li>
//             <li
//               style={{
//                 marginBottom: "8px",
//                 animation: "fadeIn 2.1s ease-in-out",
//               }}
//             >
//               <strong>Organizations:</strong> Organizations can record blood
//               donations, manage their blood supply records, view donation and
//               supply histories, and access donor and hospital information. They
//               can also analyze blood inventory through detailed analytics.
//             </li>
//           </ul>
//           <p
//             style={{
//               fontSize: "1.1rem",
//               lineHeight: "1.2",
//               marginBottom: "0px",
//               color: "#6c757d",
//               animation: "fadeIn 2.2s ease-in-out",
//             }}
//           >
//             As an admin, your role is crucial in ensuring the smooth operation
//             of the Blood Bank App. Your oversight helps maintain the system's
//             efficiency, accuracy, and reliability. Thank you for your dedication
//             to managing this vital resource, ensuring that blood donations are
//             properly recorded and utilized to save lives.
//           </p>
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideInFromLeft {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInFromRight {
//           from {
//             transform: translateX(100%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </Layout>
//   );
// };

// export default AdminHome;

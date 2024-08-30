import DashboardSideBar from "@/components/Shared/DashboardSideBar";

const DashboardLayout = ({ children }) => {
    return (
        <div >
            <DashboardSideBar />
            {children}
        </div>
    );
};

export default DashboardLayout;
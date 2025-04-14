import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, User, Shield, Image } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import ProfileSubmission from "../components/ProfileSubmission";
import ProblemSolvedByUser from "../components/ProblemSolvedByUser";
import PlaylistProfile from "../components/PlaylistProfile";

const Profile = () => {
  const { authUser } = useAuthStore();
  
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center py-10 px-4 md:px-8 w-full">
      {/* Header with back button */}
      <div className="flex flex-row justify-between items-center w-full mb-6">
        <div className="flex items-center gap-3">
          <Link to={"/"} className="btn btn-circle btn-ghost">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-bold text-primary">Profile</h1>
        </div>
      </div>
      
      <div className="w-full max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
                  {authUser.image ? (
                    <img src={authUser?.image || "https://avatar.iran.liara.run/public/boy"} alt={authUser.name} />
                  ) : (
                    <span className="text-3xl">{authUser.name ? authUser.name.charAt(0) : "U"}</span>
                  )}
                </div>
              </div>
              
              {/* Name and Role Badge */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">{authUser.name}</h2>
                <div className="badge badge-primary mt-2">{authUser.role}</div>
              </div>
            </div>
            
            <div className="divider"></div>
            
            {/* User Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="stat bg-base-200 rounded-box">
                <div className="stat-figure text-primary">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="stat-title">Email</div>
                <div className="stat-value text-lg break-all">{authUser.email}</div>
              </div>
              
              {/* User ID */}
              <div className="stat bg-base-200 rounded-box">
                <div className="stat-figure text-primary">
                  <User className="w-8 h-8" />
                </div>
                <div className="stat-title">User ID</div>
                <div className="stat-value text-sm break-all">{authUser.id}</div>
              </div>
              
              {/* Role Status */}
              <div className="stat bg-base-200 rounded-box">
                <div className="stat-figure text-primary">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="stat-title">Role</div>
                <div className="stat-value text-lg">{authUser.role}</div>
                <div className="stat-desc">
                  {authUser.role === "ADMIN" ? "Full system access" : "Limited access"}
                </div>
              </div>
              
              {/* Profile Image Status */}
              <div className="stat bg-base-200 rounded-box">
                <div className="stat-figure text-primary">
                  <Image className="w-8 h-8" />
                </div>
                <div className="stat-title">Profile Image</div>
                <div className="stat-value text-lg">
                  {authUser.image ? "Uploaded" : "Not Set"}
                </div>
                <div className="stat-desc">
                  {authUser.image ? "Image available" : "Upload a profile picture"}
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="card-actions justify-end mt-6">
              <button className="btn btn-outline btn-primary">Edit Profile</button>
              <button className="btn btn-primary">Change Password</button>
            </div>
          </div>
        </div>
        
     
      </div>
<div>

<ProfileSubmission/>
     
      <ProblemSolvedByUser/>

      <PlaylistProfile/>
</div>
      
      {/* PLaylist created by the user and their actions */}
    </div>
  );
};

export default Profile;
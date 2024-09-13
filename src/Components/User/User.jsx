import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import NotFound from "../../Interface/NotFound";

export default function User(){
  const {data} = useContext(UserContext)

  return <section className="container">
    <UserHeader/>
    <Routes>
      <Route path="/" element={<Feed user={data.id}/>}/>
      <Route path="postar" element={<UserPhotoPost />}/>
      <Route path="estatisticas" element={<UserStats />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </section>
}
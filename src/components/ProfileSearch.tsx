"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { ProfileUserProps } from "../types/index";
import UserFound from "./UserFound";
import ErrorMessage from "./ErrorMessage";
import Image from "next/image";

const ProfileSearch = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState<ProfileUserProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [wasSent, setWasSent] = useState(false);
  const [error, setError] = useState(false);

  // Animação do carregamento
  const dotVariants: Variants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  // Chamada de API
  const ApiCall = async () => {
    if (!userName) return;

    setWasSent(true);
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        setUserData(data);
        setError(false);
      } else {
        setUserData(null);
        setError(true);
      }
    } catch (error) {
      console.error("Erro ao buscar perfil", error);
      setUserData(null);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black w-[1256px] h-[537px] p-5">
      <div className="flex items-center justify-center gap-2 my-5">
        <Image src={"/github.png"} alt="GitHub" width={58} height={58} />
        <h1 className="text-[60px]">Perfil</h1>
        <Image
          src={"/name-github.png"}
          alt="nome do github "
          width={160}
          height={45}
        />
      </div>
      <div className="bg-white w-1/2 mx-auto flex items-center justify-baseline rounded-md">
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          className="text-black w-full p-2.5 outline-none placeholder:text-black"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="cor-secondary p-3 cursor-pointer rounded-md"
          onClick={ApiCall}
        >
          <Search />
        </button>
      </div>

      {loading && (
        <motion.div
          animate="jump"
          transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
          className="container flex items-center justify-center my-10"
        >
          <motion.div className="dot" variants={dotVariants}></motion.div>
          <motion.div className="dot" variants={dotVariants}></motion.div>
          <motion.div className="dot" variants={dotVariants}></motion.div>
        </motion.div>
      )}

      {error && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ErrorMessage />
        </motion.div>
      )}

      {userData && !loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <UserFound user={userData} />
        </motion.div>
      )}
    </div>
  );
};

export default ProfileSearch;

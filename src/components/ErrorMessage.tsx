import React from "react";

const ErrorMessage = () => {
  return (
    <div className="w-[710px] mx-auto h-[88px] my-5 bg-[#D9D9D9]/90 rounded-xl">
      <div className="my-6 flex items-center justify-center p-6">
        <p className="text-[#FF0000]">
          Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;

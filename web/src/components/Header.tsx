'use client';
import MainContainer from './MainContainer';
import ThemeSwitcher from './ThemeSwitcher';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
const Header = () => {
  return (
    <div className="w-full bg-white h-16 shadow-sm dark:bg-[#151515]">
      <MainContainer>
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center">
            <div className=" text-lg py-2 px-4 bg-white text-black">
              NewBees
            </div>
            <ul className="ml-10">
              <li>首页</li>
            </ul>
          </div>
          <div className="flex">
            <div className="mr-2">
              <ThemeSwitcher></ThemeSwitcher>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>头像</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Header;

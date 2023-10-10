import MainContainer from '@/components/MainContainer';
import { NavPanel } from '@/components/NavPanel';

export default function Home() {
  return (
    <div>
      <MainContainer>
        <div className="flex justify-between mt-4">
          <div className="flex-1 bg-red-100">123</div>
          <div className="ml-6 hidden lg:block">
            <NavPanel>右侧的面板</NavPanel>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

import { useAuth } from '../context/AuthContext';
import MainLayout from '../layouts/MainLayout';
import EmployerMyPage from './employer/EmployerMyPage';

/**
 * 마이페이지
 * 사용자 역할에 따라 구직자/채용자 마이페이지 분기
 */
const MyPage = () => {
  const { user } = useAuth();

  // 채용자인 경우 채용자 마이페이지 표시
  if (user?.role === 'EMPLOYER') {
    return <EmployerMyPage />;
  }

  // 구직자 마이페이지는 추후 구현
  return (
    <MainLayout>
      <div>구직자 마이페이지 (추후 구현)</div>
    </MainLayout>
  );
};

export default MyPage;
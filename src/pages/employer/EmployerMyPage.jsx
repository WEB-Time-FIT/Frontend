import { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import EmployerJobMgmtPage from './EmployerJobMgmtPage';
import EmployerApplicantMgmtPage from './EmployerApplicantMgmtPage';
import './EmployerMyPage.css';

/**
 * 채용자 마이페이지
 * 탭: 구인글 관리, 지원자 관리
 */
const EmployerMyPage = () => {
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' | 'applicants'

  return (
    <MainLayout>
      <div className="employer-my-page">
        <div className="employer-my-page__header">
          <h1 className="employer-my-page__title">마이페이지</h1>
          <p className="employer-my-page__subtitle">
            구인글을 등록하고 지원자를 관리하세요
          </p>
        </div>

        <div className="employer-my-page__tabs">
          <button
            className={`employer-my-page__tab ${
              activeTab === 'jobs' ? 'employer-my-page__tab--active' : ''
            }`}
            onClick={() => setActiveTab('jobs')}
          >
            구인글 관리
          </button>
          <button
            className={`employer-my-page__tab ${
              activeTab === 'applicants' ? 'employer-my-page__tab--active' : ''
            }`}
            onClick={() => setActiveTab('applicants')}
          >
            지원자 관리
          </button>
        </div>

        <div className="employer-my-page__content">
          {activeTab === 'jobs' ? (
            <EmployerJobMgmtPage />
          ) : (
            <EmployerApplicantMgmtPage />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default EmployerMyPage;


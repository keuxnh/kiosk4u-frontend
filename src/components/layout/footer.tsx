export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12 mt-16 no-print" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-large font-bold mb-4">키오스크 사용법 가이드</h3>
          <p className="text-body text-gray-300 mb-6">
            어르신들의 디지털 생활을 돕는 친절한 안내서
          </p>
          <div className="flex justify-center space-x-8 text-body">
            <a href="#" className="text-gray-300 hover:text-white focus-visible">
              개인정보처리방침
            </a>
            <a href="#" className="text-gray-300 hover:text-white focus-visible">
              이용약관
            </a>
            <a href="#" className="text-gray-300 hover:text-white focus-visible">
              접근성 안내
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

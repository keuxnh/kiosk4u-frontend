export default function Header() {
  return (
    <header className="bg-white border-b-4 border-primary shadow-lg" role="banner">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="text-primary text-4xl" aria-hidden="true">
              🖥️
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark">
              키오스크 사용법 가이드
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

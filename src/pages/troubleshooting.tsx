import { useState } from "react";
import { Link } from "wouter";
import FAQItem from "@/components/faq-item";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Phone, PrinterIcon } from "lucide-react";

export default function Troubleshooting() {
  const [searchQuery, setSearchQuery] = useState("");
  const commonIssues = [
    {
      question: "화면이 반응하지 않아요",
      answer: "해결방법:",
      solutions: [
        "화면을 부드럽게 다시 터치해보세요",
        "손가락이 깨끗한지 확인하세요",
        "화면에 물기나 이물질이 있다면 닦아주세요",
        "손가락 끝으로 정확히 터치하세요",
        "그래도 안 되면 직원에게 도움을 요청하세요",
      ],
      variant: "error" as const,
      icon: "⚠️",
    },
    {
      question: "카드가 인식되지 않아요",
      answer: "해결방법:",
      solutions: [
        "카드를 올바른 방향으로 넣었는지 확인하세요",
        "카드의 마그네틱 부분이 깨끗한지 확인하세요",
        "카드를 천천히 다시 넣어보세요",
        "다른 카드를 사용해보세요",
        "현금 결제나 다른 결제 방법을 시도해보세요",
      ],
      variant: "warning" as const,
      icon: "💳",
    },
    {
      question: "잘못 선택했어요, 취소하고 싶어요",
      answer: "해결방법:",
      solutions: [
        "'이전' 또는 '뒤로' 버튼을 찾아 터치하세요",
        "'취소' 버튼이 있는지 화면을 확인하세요",
        "메인 화면으로 돌아가는 '홈' 버튼을 찾으세요",
        "처음부터 다시 시작하셔도 됩니다",
        "직원에게 도움을 요청하여 취소할 수 있습니다",
      ],
      variant: "info" as const,
      icon: "↩️",
    },
  ];

  const paymentIssues = [
    {
      question: "결제가 안 되어요",
      answer: "해결방법:",
      solutions: [
        "카드 한도나 잔액을 확인하세요",
        "다른 카드로 시도해보세요",
        "현금 결제로 변경해보세요",
        "카드를 다시 삽입해보세요",
        "직원에게 문의하여 수동 결제를 요청하세요",
      ],
      variant: "error" as const,
      icon: "❌",
    },
    {
      question: "영수증이 나오지 않아요",
      answer: "해결방법:",
      solutions: [
        "영수증 출구를 확인하세요",
        "영수증 출력 버튼을 다시 눌러보세요",
        "종이가 걸렸는지 확인하세요",
        "직원에게 영수증 재발행을 요청하세요",
        "휴대폰으로 전자영수증을 받을 수 있는지 확인하세요",
      ],
      variant: "warning" as const,
      icon: "🧾",
    },
  ];

  const orderIssues = [
    {
      question: "주문한 음식이 안 나와요",
      answer: "해결방법:",
      solutions: [
        "주문번호를 다시 확인하세요",
        "주문 완료 시간을 확인하세요",
        "주문 현황 화면이 있는지 확인하세요",
        "직원에게 주문번호를 보여주고 문의하세요",
        "주문 영수증을 보관하여 증빙으로 사용하세요",
      ],
      variant: "info" as const,
      icon: "🍽️",
    },
    {
      question: "주문 내용이 틀렸어요",
      answer: "해결방법:",
      solutions: [
        "즉시 직원에게 알려주세요",
        "주문 영수증을 가져가세요",
        "결제 전이라면 주문을 취소하고 다시 주문하세요",
        "교환이나 환불을 요청할 수 있습니다",
        "다음에는 결제 전 주문 내용을 꼼꼼히 확인하세요",
      ],
      variant: "warning" as const,
      icon: "🔄",
    },
  ];

  // 전체 문제 목록
  const allIssues = [...commonIssues, ...paymentIssues, ...orderIssues];

  // 검색 결과 필터링
  const filteredIssues = searchQuery 
    ? allIssues.filter(issue => 
        issue.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        issue.solutions.some(solution => solution.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav aria-label="페이지 위치" className="mb-8 no-print">
        <ol className="flex items-center space-x-4 text-large">
          <li>
            <Link href="/">
              <span className="text-primary hover:underline focus-visible cursor-pointer">홈</span>
            </Link>
          </li>
          <li>
            <span className="text-gray-400" aria-hidden="true">
              /
            </span>
          </li>
          <li className="text-neutral-dark font-medium">문제해결</li>
        </ol>
      </nav>

      {/* Page Header */}
      <section className="text-center mb-12 print-friendly">
        <h2 className="text-xxl-heading font-bold mb-6">키오스크 문제해결 가이드</h2>
        <p className="text-2xl text-soft mb-8 max-w-3xl mx-auto">
          키오스크 사용 중 문제가 발생했나요? 자주 발생하는 문제들과 해결방법을 찾아보세요. 
          대부분의 문제는 간단하게 해결할 수 있습니다.
        </p>
        <SearchBar onSearch={setSearchQuery} />
      </section>

      {/* 검색 결과 */}
      {searchQuery && (
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">
            "{searchQuery}" 검색 결과 ({filteredIssues.length}개)
          </h3>
          {filteredIssues.length > 0 ? (
            <div className="space-y-6">
              {filteredIssues.map((issue, index) => (
                <FAQItem key={`search-${index}`} {...issue} />
              ))}
            </div>
          ) : (
            <div className="bg-soft-blue p-8 rounded-xl text-center">
              <h4 className="text-xl font-semibold mb-4">검색 결과가 없습니다</h4>
              <p className="text-soft mb-4">
                "{searchQuery}"와 관련된 내용을 찾을 수 없습니다.
              </p>
              <Button 
                onClick={() => setSearchQuery("")}
                className="bg-primary hover:bg-primary/90"
              >
                전체 문제 보기
              </Button>
            </div>
          )}
        </section>
      )}

      {/* 검색 중이 아닐 때만 카테고리별 문제들 표시 */}
      {!searchQuery && (
        <>
          {/* Common Issues */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="mr-4 text-3xl">🚨</span>
              자주 발생하는 문제
            </h3>
            <div className="space-y-6">
              {commonIssues.map((issue, index) => (
                <FAQItem key={index} {...issue} />
              ))}
            </div>
          </section>

          {/* Payment Issues */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="mr-4 text-3xl">💰</span>
              결제 관련 문제
            </h3>
            <div className="space-y-6">
              {paymentIssues.map((issue, index) => (
                <FAQItem key={index} {...issue} />
              ))}
            </div>
          </section>

          {/* Order Issues */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="mr-4 text-3xl">📦</span>
              주문 관련 문제
            </h3>
            <div className="space-y-6">
              {orderIssues.map((issue, index) => (
                <FAQItem key={index} {...issue} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Emergency Help */}
      <section className="bg-red-50 card-accessible rounded-xl p-8 print-friendly mb-16">
        <h3 className="text-xl-heading font-bold mb-6 flex items-center text-accent">
          <span className="mr-4 text-4xl" aria-hidden="true">
            🆘
          </span>
          긴급 상황 대처법
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-large font-bold text-neutral-dark">카드나 현금이 기계에 끼었을 때</h4>
            <ul className="space-y-3 text-body text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">1.</span>
                <span>절대로 억지로 빼려고 하지 마세요</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">2.</span>
                <span>즉시 매장 직원에게 알려주세요</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">3.</span>
                <span>본인 확인을 위한 신분증을 준비하세요</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-large font-bold text-neutral-dark">기계가 완전히 멈췄을 때</h4>
            <ul className="space-y-3 text-body text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">1.</span>
                <span>화면을 계속 터치하지 마세요</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">2.</span>
                <span>직원을 부르거나 고객센터에 연락하세요</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">3.</span>
                <span>결제가 진행된 경우 영수증을 확인하세요</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Help */}
      <section className="bg-gray-50 card-accessible rounded-xl p-8 text-center print-friendly">
        <h3 className="text-xl-heading font-bold mb-6 flex items-center justify-center">
          <span className="text-primary mr-4 text-4xl" aria-hidden="true">
            📞
          </span>
          추가 도움이 필요하시나요?
        </h3>
        <p className="text-large text-gray-600 mb-8">
          문제가 해결되지 않으시면 언제든지 도움을 요청하세요.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="text-primary text-4xl mb-4 mx-auto" />
            <h4 className="text-large font-bold mb-2">매장 직원 호출</h4>
            <p className="text-body text-gray-600">가장 빠른 도움</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-secondary text-4xl mb-4" aria-hidden="true">
              💬
            </div>
            <h4 className="text-large font-bold mb-2">고객센터 문의</h4>
            <p className="text-body text-gray-600">전화 상담 가능</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <PrinterIcon className="text-accent text-4xl mb-4 mx-auto" />
            <h4 className="text-large font-bold mb-2">가이드 인쇄</h4>
            <p className="text-body text-gray-600 mb-4">오프라인 참고용</p>
            <Button
              onClick={() => window.print()}
              className="btn-large bg-accent text-white hover:bg-red-700 focus-visible"
            >
              인쇄하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

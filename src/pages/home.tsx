import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const guides = [
    {
      title: "햄버거 주문하기",
      description: "패스트푸드점에서 메뉴 고르고 주문하는 방법",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f8f9fa'/%3E%3Ctext x='150' y='60' text-anchor='middle' font-size='20' fill='%23333'%3E🍔 햄버거 주문%3C/text%3E%3Crect x='100' y='80' width='100' height='40' fill='%23dc3545' rx='5'/%3E%3Ctext x='150' y='105' text-anchor='middle' font-size='14' fill='white'%3E빅맥 선택%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-size='14' fill='%23666'%3E쉽고 간단하게%3C/text%3E%3C/svg%3E",
      href: "/tutorials"
    },
    {
      title: "ATM에서 돈 뽑기",
      description: "은행 ATM에서 현금을 인출하는 방법",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f8ff'/%3E%3Ctext x='150' y='60' text-anchor='middle' font-size='20' fill='%23333'%3E🏦 ATM 사용%3C/text%3E%3Crect x='100' y='80' width='100' height='40' fill='%234caf50' rx='5'/%3E%3Ctext x='150' y='105' text-anchor='middle' font-size='14' fill='white'%3E현금인출%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-size='14' fill='%23666'%3E안전하게%3C/text%3E%3C/svg%3E",
      href: "/tutorials"
    },
    {
      title: "지하철표 사기",
      description: "지하철역에서 승차권을 구매하는 방법",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f1f8e9'/%3E%3Ctext x='150' y='60' text-anchor='middle' font-size='20' fill='%23333'%3E🚇 지하철표%3C/text%3E%3Crect x='100' y='80' width='100' height='40' fill='%232196f3' rx='5'/%3E%3Ctext x='150' y='105' text-anchor='middle' font-size='14' fill='white'%3E승차권 구매%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-size='14' fill='%23666'%3E빠르게%3C/text%3E%3C/svg%3E",
      href: "/tutorials"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* 메인 제목 */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">키오스크 사용법 배우기</h1>
        <p className="text-2xl text-soft">
          천천히 따라하며 키오스크 사용법을 익혀보세요
        </p>
      </div>

      {/* 주요 가이드 */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {guides.map((guide, index) => (
          <Card key={index} className="hover:shadow-lg transition-all">
            <CardHeader>
              <img 
                src={guide.image} 
                alt={guide.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-2xl">{guide.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xl text-soft">{guide.description}</p>
              <Link href={guide.href}>
                <Button className="w-full h-16 text-xl font-medium bg-primary hover:bg-primary/90 transition-all">
                  배우러 가기
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 사용 팁 */}
      <div className="bg-soft-green p-8 rounded-xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">키오스크 사용 팁</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">기본 사용법</h3>
            <ul className="text-xl space-y-3">
              <li>• 화면을 가볍게 터치하세요</li>
              <li>• 천천히 읽고 선택하세요</li>
              <li>• 실수해도 괜찮습니다</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">주의사항</h3>
            <ul className="text-xl space-y-3">
              <li>• 비밀번호는 가려서 입력하세요</li>
              <li>• 카드와 영수증을 꼭 챙기세요</li>
              <li>• 모르면 직원에게 도움을 요청하세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
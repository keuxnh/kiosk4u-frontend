import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      toast({
        title: "검색 완료",
        description: `"${query}" 관련 내용을 찾았습니다.`,
      });
    } else {
      toast({
        title: "검색어를 입력하세요",
        description: "찾고 싶은 내용을 입력해주세요.",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-8 no-print">
      <label htmlFor="search" className="block text-large font-medium mb-4 text-left">
        원하는 내용을 검색하세요
      </label>
      <div className="relative">
        <Input
          id="search"
          type="text"
          placeholder="예: 음식주문, 결제방법, 오류해결"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full pr-16 text-large border-3 border-gray-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus-visible min-h-[56px]"
          aria-describedby="search-help"
        />
        <Button
          onClick={handleSearch}
          className="absolute right-2 top-2 btn-large focus-visible"
          size="sm"
          aria-label="검색하기"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
      <p id="search-help" className="text-body text-gray-500 mt-2 text-left">
        찾고 싶은 키워드를 입력하세요
      </p>
    </div>
  );
}

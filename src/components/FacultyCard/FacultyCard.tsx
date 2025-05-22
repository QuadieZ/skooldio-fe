import { Bolt, Heart } from "lucide-react";
import type { FacultyDto } from "../../types";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { RoundIndicator } from "./RoundIndicator";
export type FacultyCardProps = {
  faculty: FacultyDto;
};

const ScoreCard = ({
  score,
  year,
  scoreType,
  showDivider = true,
}: {
  score: number;
  year: number;
  scoreType: "min" | "max" | "avg";
  showDivider?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-0 w-full items-center relative">
      <p className="text-lg">{score}</p>
      <p className="text-xs font-semibold  text-skd-grey-500">
        {scoreType === "min"
          ? "คะแนนต่ำสุด"
          : scoreType === "max"
          ? "คะแนนสูงสุด"
          : "คะแนนเฉลี่ย"}{" "}
        {year.toString().slice(2)}
      </p>
      {showDivider && (
        <div className="w-[1px] h-[16px] top-[40%] bg-gray-300 absolute right-0" />
      )}
    </div>
  );
};

export function FacultyCard(props: FacultyCardProps) {
  const { faculty } = props;

  return (
    <Card className="shadow-foreground/30 border-none drop-shadow-md rounded-sm transition  ease-in-out hover:-translate-y-1 hover:scale-102 cursor-pointer">
      <CardHeader>
        <Heart
          size="16px"
          fill="currentColor"
          className="text-skd-grapefruit-500 absolute right-4"
        />
        <div className="flex flex-row gap-4 border-b-[1.5px] pb-4">
          <img className="w-[23%] object-contain" src={faculty.logo} />
          <div className="flex flex-col justify-between py-2">
            <div className="flex flex-col gap-0 ">
              <h3 className="text-lg/[16px] font-bold text-skd-grapefruit-500">
                {faculty.faculty.name}
              </h3>
              <p className="text-md font-medium  text-skd-grey-500">
                {faculty.name}
              </p>
            </div>
            <p className="text-md  text-skd-grey-500">
              {faculty.faculty.university.name}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="w-full flex-1 h-full">
        <div className="flex flex-col gap-4 h-full">
          <RoundIndicator rounds={faculty?.roundSeats} />
          {faculty.score && faculty.score.scoreType === "ADMISSION" ? (
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center justify-between">
                <p className="text-sm font-semibold  text-skd-grapefruit-500">
                  รอบที่ 4: Admission
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-skd-grapefruit-500 bg-white rounded-full border-skd-grapefruit-500 gap-1 hover:text-skd-grapefruit-500 cursor-pointer "
                >
                  <p className="text-sm">แก้ไขคะแนน</p>
                  <Bolt size="12px" />
                </Button>
              </div>
              <div className="grid grid-cols-3">
                <ScoreCard
                  score={faculty.score.min}
                  year={faculty.score.year}
                  scoreType="min"
                />
                <ScoreCard
                  score={faculty.score.avg}
                  year={faculty.score.year}
                  scoreType="avg"
                />
                <ScoreCard
                  score={faculty.score.max}
                  year={faculty.score.year}
                  scoreType="max"
                  showDivider={false}
                />
              </div>
            </div>
          ) : (
            <div className="flex w-full h-full items-center justify-center">
              <p className="text-sm font-semibold  text-skd-grapefruit-500">
                ยังไม่มีคะแนน
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

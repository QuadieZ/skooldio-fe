import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type RoundIndicatorProps = {
  rounds: number[];
  showLabel?: boolean;
};

const RoundBadge = ({
  roundNumber,
  roundSeats,
}: {
  roundNumber: number;
  roundSeats: number;
}) => {
  if (roundSeats <= 0) {
    return (
      <div className="rounded-full w-6 h-6 flex items-center justify-center bg-gray-300">
        <p className="text-md text-white">{roundNumber}</p>
      </div>
    );
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`rounded-full w-6 h-6 flex items-center justify-center bg-skd-teal-500`}
          >
            <p className="text-md text-white">{roundNumber}</p>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>มีทั้งหมด {roundSeats} ที่นั่ง</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export function RoundIndicator(props: RoundIndicatorProps) {
  const { rounds, showLabel = true } = props;

  return (
    <div className="flex flex-row gap-4 items-center">
      {showLabel && <p className="text-lg  text-skd-grey-500">รอบที่เปิด</p>}
      {rounds ? (
        <div className="flex flex-row gap-2">
          {rounds?.map((round, index) => (
            <RoundBadge
              key={`round-${index}`}
              roundNumber={index + 1}
              roundSeats={round}
            />
          ))}
        </div>
      ) : (
        <p className="text-md font-semibold  text-skd-grey-500">
          ยังไม่มีรอบที่เปิด
        </p>
      )}
    </div>
  );
}

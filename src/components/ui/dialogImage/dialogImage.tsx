import { X } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog/dialog";

type Props = {
  open: boolean;
  images: string[];
  startIndex: number;
  handleClose: () => void;
};

export const DialogImage = ({
  open,
  images,
  startIndex = 0,
  handleClose,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[80vw]">
        <DialogTitle className="none" />
        <DialogHeader>
          <DialogClose
            onClick={handleClose}
            className="cursor-pointer flex justify-end size-6 ml-auto"
          >
            <X color="#ffffff" size={30} />
          </DialogClose>
        </DialogHeader>
        <Carousel
          opts={{
            loop: true,
            startIndex,
          }}
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image} className="relative h-80 md:h-152">
                <Image src={image} alt="" className="object-contain" fill />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-10 md:size-14 rounded-full !bg-[rgba(0,0,0,0.7)] cursor-pointer left-1 md:left-2" />
          <CarouselNext className="size-10 md:size-14 rounded-full !bg-[rgba(0,0,0,0.7)] cursor-pointer right-1 md:right-2" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

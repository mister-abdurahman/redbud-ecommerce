import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IProps {
  title: string;
  subtitle: string;
}

export function PaymentStatusDialog({ title, subtitle }: IProps) {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        {/* <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

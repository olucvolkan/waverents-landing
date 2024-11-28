import {
    Typography,
    Card,
    CardBody,
  } from "@material-tailwind/react";
  
  
  interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
  }
  
  export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
    return (
      <Card color="transparent" shadow={false} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <CardBody className="grid justify-start" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-[#25BCE1]/10 p-2.5 text-left">
            <Icon className="h-6 w-6 text-[#25BCE1]" />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {title}
          </Typography>
          <Typography className=" font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {children}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default FeatureCard;
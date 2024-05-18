import { usePaymentUrl } from "@/src/hooks/usePaymentUrl";
import { LoadingButton } from "../ui/loadingButton";
import { useRouter } from "next/navigation";
import { WarningDialog } from "../teams/WarningDialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { useParticipant } from "@/src/hooks/useParticipant";
import { usePrice } from "@/src/hooks/usePrice";
import { Separator } from "../ui/separator";

export const PaymentButton = () => {
  const { me } = useParticipant();
  const { price } = usePrice();
  const { paymentUrl, isLoading, refetchUrl } = usePaymentUrl();
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();
  if (!isLoading && !!paymentUrl) {
    router.push(paymentUrl.url);
  }
  return (
    <>
      <WarningDialog
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        isLoading={isLoading}
        title="Payer l'inscription"
        description={
          <div>
            <div className="my-2 font-semibold">Récapitulatif</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Participation</span>
                <span>{price?.student_price! / 100} €</span>
              </div>
              {me?.t_shirt_size && (
                <>
                  <div className="flex justify-between">
                    <span>T-Shirt taille {me.t_shirt_size}</span>
                    <span>{price?.t_shirt_price! / 100} €</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>
                      {(price?.student_price! + price?.t_shirt_price!) / 100} €
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="mt-6 mb-2 font-semibold">
              Information sur le prestataire de paiement
            </div>
            <p>
              Vous allez être redirigé vers HelloAsso pour procéder au paiement
              de votre inscription. Ce service ne prend aucun frais sur les
              paiements, il se repose uniquement sur les dons. Par défaut,
              HelloAsso vous propose de faire un don. Si vous choississez de le
              faire, seul HelloAsso en bénéficiera.
            </p>
          </div>
        }
        validateLabel="Payer"
        callback={() => {
          refetchUrl();
        }}
      />
      <Button
        className="col-span-4 ml-auto w-[100px]"
        onClick={(_) => {
          setIsOpened(true);
        }}
      >
        Payer
      </Button>
    </>
  );
};

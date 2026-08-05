import ReviewForm from "./_components/ReviewForm";

interface Props {
  params: Promise<{
    rentalId: string;
  }>;
}

export default async function CreateReviewPage({
  params,
}: Props) {
  const { rentalId } =
    await params;

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <h1 className="text-3xl font-bold">
        Leave Review
      </h1>

      <ReviewForm
        rentalOrderId={rentalId}
      />
    </div>
  );
}
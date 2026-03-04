export default function Product({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div >
            Product page with id: {params.then(p => p.id)}
        </div>
    );
}
import { CartItem } from "@/src/types";
import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import { formatPriceCLP } from "@/src/utils/formatPrice";
import Image from "next/image";
import { useStore } from "@/src/store";

type ProductDetailsProps = {
  item: CartItem;
};

const MAX_ITEMS = 10

export default function ProductDetails({ item }: ProductDetailsProps) {
  console.log(item)

  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeItem = useStore((state) => state.removeItem);

  const disableIncreaseButton = item.quantity === MAX_ITEMS;

  const finalPrice = item.discountPrice ?? item.price;
  const subtotal = finalPrice * item.quantity;

  return (
    <div className="grid grid-cols-[80px_1fr_120px_160px_70px_auto] items-center gap-4 py-4">
      {/* IMAGE */}
      <div className="relative w-[80px] h-[80px] bg-[#F5F5F5] rounded">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* NAME */}
      <p className="text-sm font-medium text-black line-clamp-2">{item.name}</p>

      {/* PRICE */}
      <p className="text-sm font-semibold text-gray-700">
        {formatPriceCLP(finalPrice)}
      </p>

      {/* QUANTITY SELECTOR */}
      <div className="flex w-max items-center justify-between p-1  rounded-xl shadow-inner">

        {/* MINUS */}
        <button
          onClick={() => decreaseQuantity(item.id)}
          type="button"
          className="
      flex items-center justify-center
      w-8 h-8
      rounded-lg
      bg-white text-black/70
      shadow-sm hover:shadow-md
      hover:text-[#DB4444]
      active:scale-95
      transition-all duration-200
      cursor-pointer
    "
        >
          <FiMinus size={16} strokeWidth={3} />
        </button>

        {/* QUANTITY */}
        <span className="w-10 text-center font-bold text-black tabular-nums">
          {item.quantity}
        </span>

        {/* PLUS */}
        <button
          onClick={() => increaseQuantity(item.id)}
          disabled={disableIncreaseButton}
          type="button"
          className="
      flex items-center justify-center
      w-8 h-8
      rounded-lg
      bg-[#DB4444] text-white
      shadow-sm hover:bg-[#c13b3b]
      hover:shadow-lg hover:shadow-red-200
      active:scale-95
      transition-all duration-200
      cursor-pointer
    "
        >
          <FiPlus size={16} strokeWidth={3} />
        </button>
      </div>

      {/* SUBTOTAL */}
      <p className="text-sm font-bold text-black">{formatPriceCLP(subtotal)}</p>

      {/* REMOVE */}
      <button
        onClick={() => removeItem(item.id)}
        className="
    flex items-center justify-center
    w-8 h-8
    rounded-lg
    text-red-500
    hover:bg-red-50
    hover:text-red-700
    transition
    shrink-0
  "
      >
        <FiX size={18} />
      </button>
    </div>
  );
}

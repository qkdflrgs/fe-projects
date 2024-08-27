import { putImageFile } from "@/src/apis/r2/putImageFile";
import { Flex, Text } from "@litae/react-components-layout";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";

export type ImageURLInputProps = {
  defaultValue?: string; // 이미 URL이 있는 경우 URL를 넘겨 받을 수 있도록
  onChange?: (value: string) => void;
  placeholder?: string;
};

export const ImageURLInput = ({
  defaultValue,
  onChange,
  placeholder = "이미지 선택",
}: ImageURLInputProps) => {
  const [imageUrl, setImageUrl] = useState(defaultValue);

  const handleInputFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (file && file.type.match("image.*")) {
      try {
        const { randomUUID } = new ShortUniqueId({ length: 20 });
        const fileName = randomUUID();

        const imageURL = await putImageFile({
          fileName,
          file,
        });

        setImageUrl(imageURL);
        onChange?.(imageURL);
      } catch {
        console.log("이미지 업로드 실패");
      }
    }
  };

  return (
    <label htmlFor="imageFile">
      <input
        type="file"
        id="imageFile"
        accept=".png, .jpg, .jpeg, .webp"
        style={{ display: "none" }}
        onChange={handleInputFileChange}
      />
      <Flex
        justify="center"
        align="center"
        borderRadius="lg"
        background="gray"
        style={{
          width: "240px",
          height: "180px",
          cursor: "pointer",
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Text color="gray" fontSize="sm">
            {placeholder}
          </Text>
        )}
      </Flex>
    </label>
  );
};

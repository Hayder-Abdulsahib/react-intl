import { Image, Center, Flex } from "../styles";
import { FormattedMessage, FormattedNumber } from "react-intl";

const Products = () => {
  return (
    <Flex>
      <Center>
        <Image
          src={
            "https://www.almarai.com/wp-content/uploads/2017/11/FullFat-FreshMilk-2L-AR.jpg"
          }
        />
        <FormattedMessage id="product1" defaultMessage="default message" />
        <br />
        <FormattedNumber value={2.2} style="currency" currency="jod" />
      </Center>
      <Center>
        <Image
          src={
            "https://www.almarai.com/wp-content/uploads/2017/11/42280-UHT-MILK-LF-1L-SCREWCAP-WITH-VITAMIN-AR_WEB.jpg"
          }
        />
        <FormattedMessage id="product2" defaultMessage="default message" />
        <br />
        <FormattedNumber value={1} style="currency" currency="JOD" />
      </Center>
      <Center>
        <Image
          src={
            "https://www.almarai.com/wp-content/uploads/2021/04/59510-TRIANGLE-CHEESE-240G-1X24-KIDS_WEB_WEB.jpg"
          }
        />
        <FormattedMessage id="product3" defaultMessage="default message" />
        <br />
        <FormattedNumber value={1.5} style="currency" currency="JOD" />
      </Center>
      <Center>
        <Image
          src={
            "https://www.almarai.com/wp-content/uploads/2021/04/54110-CHEDDAR-BLOCK-LF-454G-1X12-AR_WEB.jpg"
          }
        />
        <FormattedMessage id="product4" defaultMessage="default message" />
        <br />
        <FormattedNumber value={1.8} style="currency" currency="JOD" />
      </Center>
    </Flex>
  );
};

export default Products;

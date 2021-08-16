import {
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedNumber,
} from "react-intl";
import { Space } from "../styles";

const ContactUs = ({ locale }) => {
  return (
    <>
      {locale === "ara" ? (
        <Space>
          <div className="right">
            <FormattedMessage id="website" defaultMessage="some default one" />
            <FormattedMessage
              id="websiteDetail"
              defaultMessage="some default one"
              values={{
                a: (link) => <a href="https://www.almarai.com/">{link}</a>,
              }}
            />
          </div>
          <br />
          <br />
          <div className="right">
            <FormattedMessage id="phone" defaultMessage="some default one" />
            <FormattedMessage
              id="phoneDetail"
              defaultMessage="some default one"
            />
          </div>
          <br />
          <br />
          <div className="right">
            <FormattedMessage
              id="emailWithValue"
              defaultMessage="some default one"
              values={{ email: "contactus@almarai.com" }}
            />
          </div>
          <br />
          <br />
          <div className="right">
            <FormattedMessage id="email" defaultMessage="some default one" />
            <FormattedMessage
              id="emailDetail"
              defaultMessage="some default one"
            />
          </div>
          <br />
          <br />
          <div className="right">
            <FormattedMessage id="address" defaultMessage="some default one" />
            <FormattedMessage
              id="addressDetail"
              defaultMessage="some default one"
            />
          </div>
        </Space>
      ) : (
        <Space>
          <FormattedMessage id="website" defaultMessage="some default one" />
          <FormattedMessage
            id="websiteDetail"
            defaultMessage="some default one"
            values={{
              a: (chunks) => <a href="https://www.almarai.com/">{chunks}</a>,
            }}
          />
          <br />
          <br />
          <FormattedMessage id="phone" defaultMessage="some default one" />
          <FormattedMessage
            id="phoneDetail"
            defaultMessage="some default one"
          />
          <br />
          <br />
          <FormattedMessage
            id="emailWithValue"
            defaultMessage="some default one"
            values={{ email: "contactus@almarai.com" }}
          />
          <br />
          <br />
          <FormattedMessage id="email" defaultMessage="some default one" />
          <FormattedMessage
            id="emailDetail"
            defaultMessage="some default one"
          />
          <br />
          <br />
          <FormattedMessage id="address" defaultMessage="some default one" />
          <FormattedMessage
            id="addressDetail"
            defaultMessage="some default one"
          />
        </Space>
      )}
      {/* <Space>
        <FormattedDate
          value={"2019-03-11"}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
        <br />
        <FormattedTime value={new Date(2018, 11, 24, 19, 33, 30, 0)} />
        <br />
        <FormattedNumber value={1000} style="unit" unit="kilobyte" />
        <br />
        <FormattedNumber
          value={28}
          unit="celsius"
          unitDisplay="long"
          style="unit"
        />
      </Space> */}
    </>
  );
};

export default ContactUs;

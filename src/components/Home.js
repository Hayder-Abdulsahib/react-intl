import { Space, Space2 } from "../styles";

import { FormattedMessage } from "react-intl";

const Home = ({ locale }) => {
  return (
    <>
      {locale === "ara" ? (
        <>
          <div className="right">
            <Space>
              <FormattedMessage
                id="heading"
                defaultMessage="some default one"
                values={{ companyName: "المراعي" }}
              />
            </Space>
          </div>
          <div className="right">
            <Space2>
              <FormattedMessage id="title" defaultMessage="some default one" />
            </Space2>
          </div>
        </>
      ) : (
        <Space>
          <FormattedMessage
            id="heading"
            defaultMessage="some default one"
            values={{ companyName: "المراعي" }}
          />

          <br />
          <br />
          <FormattedMessage id="title" defaultMessage="some default one" />
        </Space>
      )}
    </>
  );
};
export default Home;

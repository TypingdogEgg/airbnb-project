import styled from "styled-components";

export const ItemWrapper = styled.div`
    box-sizing: border-box;
    width: ${props=>props.itemWidth};
    padding: 8px;
    margin-left: -8px;

    .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: #39576a;
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    height: 37px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.color.textColor};

    .rate{
        font-size: 12px;
        color: ${props=>props.theme.color.primaryColor};

        .ant-rate-star{
            margin-inline-end:3px;
        }
    }

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -3px;
    }
  }
`
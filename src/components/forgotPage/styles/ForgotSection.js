import { styled } from "styled-components";

const ForgotSection = styled.section`
  max-width: 560px;
  margin: 0 auto;
  padding: 10rem 5% 20rem;

  &>header{
    margin-bottom: 3rem;

    &>h1{
      margin: 0 0 .5rem;
      font-size: 14px;
      line-height: 1.4;
      word-break: keep-all;
    }

    &>p{
      font-size: 1.5rem;
      line-height: 1.4;
      color: var(--black);
      margin: 0;
    }
  }

  &>form{
    &>div{
      
      &>label{
        display: block;
        margin: 0 0 .25rem;
      }
    }

    &>footer{
      &>button{
        float: left;
      }
      &>span{
        float: right;
        margin-top: 16px;
        &>a{
          color: var(--orange);
        }
      }
    }
  }

`

export default ForgotSection;
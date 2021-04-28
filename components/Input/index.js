import * as S from "./style";
export default function Input({
  type,
  labelValue,
  inputValue,
  id,
  inputName,
  options,
  ...props
}) {
  switch (type) {
    case "submit":
      return (
        <S.DefaultSubmit type="submit" defaultValue={inputValue} {...props} />
      );
    case "radio":
      return (
        <S.inputBox>
          <p>{labelValue}</p>
          <input
            type="radio"
            id={`yes-${id}`}
            name={inputName}
            defaultValue={true}
            {...props}
          />
          <S.defaultLabel htmlFor={`yes-${id}`}>SIM</S.defaultLabel>
          <br />
          <input
            type="radio"
            id={`no-${id}`}
            name={inputName}
            defaultValue={false}
            {...props}
          />
          <S.defaultLabel htmlFor={`no-${id}`}>NÃO</S.defaultLabel>
        </S.inputBox>
      );
    case "select":
      return (
        <S.inputBox>
          <S.defaultLabel htmlFor={id}>{labelValue}</S.defaultLabel>
          <br />
          <S.defaultSelect name={inputName} {...props}>
            <option selected hidden defaultValue="Escolha uma opção">
              Escolha uma opção
            </option>
            {options &&
              options.map((el, inputName) => {
                return (
                  <option key={inputName} defaultValue={el.valueName}>
                    {el.optionName}
                  </option>
                );
              })}
          </S.defaultSelect>
        </S.inputBox>
      );
    default:
      return (
        <S.inputBox>
          <S.defaultLabel htmlFor={id}>{labelValue}</S.defaultLabel>
          <br />
          <S.defaultInput
            type={type}
            name={inputName}
            defaultValue={inputValue}
            {...props}
          />
        </S.inputBox>
      );
  }
}

import {
  ErrorDefault,
  NeutralDefault,
  NeutralVariantDefault,
  PrimaryDefault,
  SecondaryDefault,
  TertiaryDefault,
  EarnDefault,
  PayDefault,
} from "./Tone";

// export type TonalPalette = {
//     primary: Tone;
//     secondary: Tone;
//     tertiary: Tone;
//     neutral: Tone;
//     neutralVariant: Tone;
//     error: Tone;
// }

export const TonalPaletteDefault = {
  primary: PrimaryDefault,
  secondary: SecondaryDefault,
  tertiary: TertiaryDefault,
  neutral: NeutralDefault,
  neutralVariant: NeutralVariantDefault,
  error: ErrorDefault,
  pay: PayDefault,
  earn: EarnDefault,
};

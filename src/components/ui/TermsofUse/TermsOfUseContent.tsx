import { memo } from 'react';
import {
  VStack,
  HStack,
  useColorModeValue,
  Box,
  Text,
  chakra,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Images from 'assets/images';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { C } from 'components';
// import useModalStore from 'hooks/store/useModalStore';
import TermsOfUseTitle from './TermsOfUseTitle';
// import Gradient from './Gradient';

const TermsofUseContent = () => {
  const { t } = useTranslation(`default`).i18n;
  const text = useColorModeValue('glass.100', 'glass.700');
  const bgImage = useColorModeValue(Images.backgrounds.teamofuseBg, Images.backgrounds.teamofuseBg);
  // const show = useModalStore((state) => state.setDownloadPage);
  // const [isLessThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <C.HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
      bgColor="#121216"
      backgroundSize="contain"
      backgroungRepeat="no-repeat"
      bgPosition="top"
    >
      <VStack color={text} w="full" pt={{ base: '20px', md: '72px' }}>
        <VStack maxW="1232px" w="full" px="16px">
          <HStack w="full" justify="start">
            <VStack
              align={{ base: 'flex-start' }}
              spacing="22px"
              w={{ base: '100%' }}
              //   paddingX={{ base: '0', md: '40px' }}
              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <VStack align="inherit" marginBottom={{ base: '0', md: '15px' }}>
                <Box
                  bgClip="text"
                  color="white"
                  sx={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  background="linear-gradient(
                    330deg
                    , rgb(140 48 155 / 51%) 3.86%, rgba(140, 48, 155, 0) 52.18%),linear-gradient(
                    57.44deg
                    , rgb(56 4 193 / 46%) -14.75%, rgba(56, 4, 193, 0) 32.81%),#FFFFFF"
                >
                  <TermsOfUseTitle title={t(keys.termsOfUse.title)} />
                </Box>
              </VStack>
              <HStack
                flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                background="rgba(28, 28, 40, 0.65)"
                display="flex"
                spacing={2}
                columnGap={3}
                w={{ base: '100%' }}
                padding={{ base: '35px 30px', lg: '72px 46px' }}
                borderRadius="24px"
                order={{ base: '3', md: '2' }}
                _hover={{
                  border: '2px solid rgba(240, 65, 83, 0.28)',
                  transition: 'border 0.2s linear',
                }}
                border="2px solid rgba(255,255,255,0.05)"
              >
                <Box>
                  <Text
                    textStyle={{ base: 'bold4', lg: 'bold5' }}
                    marginBottom={{ base: '20px', lg: '32px' }}
                  >
                    Your Agreement to these Terms of Service
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Please read these Terms of Service carefully. This is a binding contarct.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Welcome to the services operated by Impakt Holdings LTD. (collectively with its
                    affiliates, “Impakt” or “We”) consisting of the website available at
                    https://www.impakt.com, and its network of websites, software applications, or
                    any other products or services offered by Impakt (the “Impakt Services”).
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Other services offered by Impakt may be subject to separate terms. When using
                    the Impakt Services, you will be subject to Impakt’s Community Guidelines and
                    additional guidelines or rules that are posted on the Impakt Services, made
                    available to you, or disclosed to you in connection with specific services and
                    features. Impakt may also offer certain paid services, which are subject to the
                    Impakt Terms of Sale as well as any additional terms or conditions that are
                    disclosed to you in connection with such services.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    All such terms and guidelines (the “Guidelines”) are incorporated into these
                    Terms of Service by reference. The Terms of Service apply whether you are a user
                    that registers an account with the Impakt Services or an unregistered user.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    You agree that by clicking “Sign Up” or otherwise registering, downloading,
                    accessing, or using the Impakt Services, you are entering into a legally binding
                    agreement between you and Impakt regarding your use of the Impakt Services. You
                    acknowledge that you have read, understood, and agree to be bound by these Terms
                    of Service. If you do not agree to these Terms of Service, do not access or
                    otherwise use any of the Impakt Services. When using Impakt or opening an
                    account with Impakt on behalf of a company, entity, or organization
                    (collectively, “Subscribing Organization”), you represent and warrant that you:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Are an authorized representative of that Subscribing Organization with the
                      authority to bind that organization to these Terms of Service and grant the
                      licenses set forth herein.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Agree to these Terms of Service on behalf of such Subscribing Organization.
                    </ListItem>
                  </UnorderedList>
                  <Text textStyle="bold20" color="#fff" marginBottom="8px">
                    Use of Impakt by Minors and Blocked Persons
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    The Impakt Services are not available to persons under the age of 13. If you are
                    between the ages of 13 and the age of legal majority in your jurisdiction of
                    residence, you may only use the Impakt Services under the supervision of a
                    parent or legal guardian who agrees to be bound by these Terms of Service.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    The Impakt Services are also not available to any users previously removed from
                    the Impakt Services by Impakt or to any persons barred from receiving them under
                    the laws of the United States (such as its export and re-export restrictions and
                    regulations) or applicable laws in any other jurisdiction.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    By downloading, installing, or otherwise using the impakt service, you represent
                    that:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      You are at least 13 years of age.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Your parent or legal or legal guadian agrees to be bound by these terms of
                      service, if you are between 13 and the age of legal majority in your
                      jurisdiction of residence.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      You have not previously removed from and are not prohibited from receiving the
                      Impakt services.
                    </ListItem>
                  </UnorderedList>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Privacy Notice
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Impakt sends landmark information as necessary for the operation of the
                    application. We do not record your picture or video, nor will we send your
                    picture or video data without your explicit permission prior to performing this
                    function.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Account
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    a. Account and Password In order to open an account, you will be asked to
                    provide us with certain information such as an account name and password. You
                    are solely responsible for maintaining the confidentiality of your account, your
                    password and for restricting access to your computer. If you permit others to
                    use your account credentials, you agree to these Terms of Service on behalf of
                    all other persons who use the Services under your account or password, and you
                    are responsible for all activities that occur under your account or password.
                    Please make sure the information you provide to Impakt upon registration and at
                    all other times is true, accurate, current, and complete to the best of your
                    knowledge. Unless expressly permitted in writing by Impakt, you may not sell,
                    rent, lease, share, or provide access to your account to anyone else, including
                    without limitation, charging anyone for access to administrative rights on your
                    account. Impakt reserves all available legal rights and remedies to prevent
                    unauthorized use of the Impakt Services, including, but not limited to,
                    technological barriers, IP mapping, and, in serious cases, directly contacting
                    your Internet Service Provider (ISP) regarding such unauthorized use.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    b. Third-Party Accounts Impakt may permit you to register for and log on to the
                    Impakt Services via certain third-party services. The third party’s collection,
                    use, and disclosure of your information will be subject to that third-party
                    service’s privacy notice. Further information about how Impakt collects, uses,
                    and discloses your personal information when you link your Impakt account with
                    your account on any third-party service can be found in our{' '}
                    <chakra.span color="#F91F35">Privacy Notice</chakra.span>.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Use of Devices and Services
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Access to the Impakt Services may require the use of your personal computer or
                    mobile device, as well as communications with or use of space on such devices.
                    You are responsible for any Internet connection or mobile fees and charges that
                    you incur when accessing the Impakt Services.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Modification of these Terms of Service
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Impakt may amend any of the terms of these Terms of Service by posting the
                    amended terms. Your continued use of the Impakt Services after the effective
                    date of the revised Terms of Service constitutes your acceptance of the terms.
                    For residents of the Republic of Korea, Impakt will provide reasonable prior
                    notice regarding any material amendments to its Terms of Service. All amendments
                    shall become effective no sooner than 30 calendar days after posting; provided
                    that any amendment regarding newly available features of the Service, features
                    of the Service that are beneficial to the user, or changes made for legal
                    reasons may become effective immediately.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    License
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    The Impakt Services are owned and operated by Impakt. Unless otherwise
                    indicated, all content, information, and other materials on the Impakt Services
                    (excluding User Content, set out in Section 8 below), including, without
                    limitation, Impakt’s trademarks and logos, the visual interfaces, graphics,
                    design, compilation, information, software, computer code (including source code
                    or object code), services, text, pictures, video, information, data, sound
                    files, other files, and the selection and arrangement thereof (collectively, the
                    “Materials”) are protected by relevant intellectual property and proprietary
                    rights and laws. All Materials are the property of Impakt or its subsidiaries or
                    affiliated companies and/or third-party licensors. Unless otherwise expressly
                    stated in writing by Impakt, by agreeing to these Terms of Service you are
                    granted a limited, non-sublicensable license (i.e., a personal and limited
                    right) to access and use the Impakt Services for your personal use or internal
                    business use only. Impakt reserves all rights not expressly granted in these
                    Terms of Service.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    This license is subject to these Terms of Service and does not permit you to
                    engage in any of the following:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Resale or commercial use of the Impakt Services or the Materials.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Distribution, public performance or public display of any Materials.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Modifying or otherwise making any derivative uses of the Impakt Services or
                      the Materials, or any portion of them.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Use of any data mining, robots, or similar data gathering or extraction
                      methods.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Downloading (except page caching) of any portion of the Impakt Services, the
                      Materials, or any information contained in them, except as expressly permitted
                      on the Impakt Services.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Or any use of the Impakt Services or the Materials except for their intended
                      purposes. Any use of the Impakt Services or the Materials except as
                      specifically authorized in these Terms of Service, without the prior written
                      permission of Impakt, is strictly prohibited and may violate intellectual
                      property rights or other laws. Unless explicitly stated in these Terms of
                      Service, nothing in them shall be interpreted as conferring any license to
                      intellectual property rights, whether by estoppel, implication, or other legal
                      principles. Impakt can terminate this license as set out in Section 14.
                    </ListItem>
                  </UnorderedList>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    User Content
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Impakt allows you to distribute streaming live and pre-recorded audio-visual
                    works; to use services, such as chat, bulletin boards, forum postings, wiki
                    contributions, and voice interactive services; and to participate in other
                    activities in which you may create, post, transmit, perform, or store content,
                    messages, text, sound, images, applications, code, or other data or materials on
                    the Impakt Services (“User Content”):
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    a. License to Impakt
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (1) Unless otherwise agreed to in a written agreement between you and Impakt
                    that was signed by an authorized representative of Impakt, if you submit,
                    transmit, display, perform, post, or store User Content using the Impakt
                    Services, you grant Impakt and its sub-licensees, to the furthest extent and for
                    the maximum duration permitted by applicable law (including in perpetuity if
                    permitted under applicable law), an unrestricted, worldwide, irrevocable, fully
                    sub-licenseable, nonexclusive, and royalty-free right to:
                  </Text>
                  <UnorderedList marginBottom="12px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Use, reproduce, modify, adapt, publish, translate, create derivative works
                      from, distribute, perform, and display such User Content (including without
                      limitation for promoting and redistributing part or all of the Impakt Services
                      (and derivative works thereof) in any form, format, media, or media channels
                      now known or later developed or discovered.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Use the name, identity, likeness, and voice (or other biographical
                      information) that you submit in connection with such User Content. Should such
                      User Content contain the name, identity, likeness, and voice (or other
                      biographical information) of third parties, you represent and warrant that you
                      have obtained the appropriate consents and/or licenses for your use of such
                      features and that Impakt and its sub-licensees are allowed to use them to the
                      extent indicated in these Terms of Service.
                    </ListItem>
                  </UnorderedList>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (2) With respect to User Content known as “add-ons”, “maps”, “mods”, or other
                    types of projects submitted through CurseForge.com or related sites (the
                    “Submitted Projects”), the rights granted by you hereunder terminate once you
                    remove or delete such Submitted Projects from the Impakt Services. You also
                    acknowledge that Impakt may retain, but not display, distribute, or perform,
                    server copies of Submitted Projects that have been removed or deleted.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (3) With respect to streaming live and pre-recorded audio-visual works, the
                    rights granted by you hereunder terminate once you delete such User Content from
                    the Impakt Services, or generally by closing your account, except:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      To the extent you shared it with others as part of the Impakt Services and
                      others copied or stored portions of the User Content (e.g., made a Clip).
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Impakt used it for promotional purposes
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      For the reasonable time it takes to remove from backup and other systems.
                    </ListItem>
                  </UnorderedList>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    b. User Content Representaions and Warranties
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    You are solely responsible for your User Content and the consequences of posting
                    or publishing it. You represent and warrant that:
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (1) You are the creator or own or control all right in and to the User Content
                    or otherwise have sufficient rights and authority to grant the rights granted
                    herein.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (2) Your User Content does not and will not:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Infringe, violate, or misappropriate any third-party right, including any
                      copyright, trademark, patent, trade secret, moral right, privacy right, right
                      of publicity, or any other intellectual property or proprietary right.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Defame any other person.
                    </ListItem>
                  </UnorderedList>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (3) Your User Content does not contain any viruses, adware, spyware, worms, or
                    other harmful or malicious code.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    (4) Unless you have received prior written authorization, your User Content
                    specifically does not contain any pre-release or non-public beta software or
                    game content or any confidential information of Impakt or third parties. Impakt
                    reserves all rights and remedies against any users who breach these
                    representations and warranties.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    C. Content is Uploaded at Your Own Risk
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Impakt uses reasonable security measures in order to attempt to protect User
                    Content against unauthorized copying and distribution. However, Impakt does not
                    guarantee that any unauthorized copying, use, or distribution of User Content by
                    third parties will not take place. To the furthest extent permitted by
                    applicable law, you hereby agree that Impakt shall not be liable for any
                    unauthorized copying, use, or distribution of User Content by third parties and
                    release and forever waive any claims you may have against Impakt for any such
                    unauthorized copying or usage of the User Content, under any theory.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    The sequrity measures to protect user content used by Impakt herein are provided
                    and used “As-Is” and with no warranties, guarantees, conditions, assurances, or
                    other terms that such security measures will withstand attempts to evade
                    security mechanisms or that there will be no cracks, disablements, or other
                    circumvention of such security measures.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    d. Promotions
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Users may promote, administer, or conduct a promotion (e.g., a contest or
                    sweepstakes) on, through, or utilizing the Impakt Services (a “Promotion”). If
                    you choose to promote, administer, or conduct a Promotion, you must adhere to
                    the following rules:
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (1) You may carry out Promotions to the extent permitted by applicable law and
                    you are solely responsible for ensuring that any Promotions comply with any and
                    all applicable laws, obligations, and restrictions.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (2) You will be classified as the promoter of your Promotion in the applicable
                    jurisdiction(s) and you will be solely responsible for all aspects of and
                    expenses related to your Promotion, including without limitation the execution,
                    administration, and operation of the Promotion; drafting and posting any
                    official rules; selecting winners; issuing prizes; and obtaining all necessary
                    third-party permissions and approvals, including without limitation filing any
                    and all necessary registrations and bonds. Impakt has the right to remove your
                    Promotion from the Impakt Services if Impakt reasonably believes that your
                    Promotion does not comply with the Terms of Service or applicable law.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    (3) Impakt is not responsible for and does not endorse or support any such
                    Promotions. You may not indicate that Impakt is a sponsor or co-sponsor of the
                    Promotion.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    (4) You will display or read out the following disclaimer when promoting,
                    administering, or conducting a Promotion: “This is a promotion by [Your Name].
                    Impakt does not sponsor or endorse this promotion and is not responsible for
                    it.”.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    e. Endorsements/Testimonials
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    You agree that your User Content will comply with the FTC’s Guidelines
                    Concerning the Use of Testimonials and Endorsements in Advertising, the FTC’s
                    Disclosures Guide, the FTC’s Native Advertising Guidelines, and any other
                    guidelines issued by the FTC from time to time (the “FTC Guidelines”), as well
                    as any other advertising guidelines required under applicable law. For example,
                    if you have been paid or provided with free products in exchange for discussing
                    or promoting a product or service through the Impakt Services, or if you are an
                    employee of a company and you decide to discuss or promote that company’s
                    products or services through the Impakt Services, you agree to comply with the
                    FTC Guidelines’ requirements for disclosing such relationships. You, and not
                    Impakt, are solely responsible for any endorsements or testimonials you make
                    regarding any product or service through the Impakt Services.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="4px">
                    f. Political Activity
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Subject to these Terms of Service and the Community Guidelines, you may share
                    political opinions; participate in political activity; provide links to a
                    political committee’s official website, including the contribution page of a
                    political committee; and solicit viewers to make contributions directly to a
                    political committee. You agree, however, that these activities are entirely your
                    own. Moreover, by engaging in these activities, you represent and warrant that
                    you are eligible to engage in them under applicable law, and that you will abide
                    by all relevant laws and regulations while doing so. You agree not to solicit
                    the use of or use any Impakt monetization tool (e.g., Bits or subscriptions) for
                    the purpose of making or delivering a contribution to a candidate, candidate’s
                    committee, political action committee, ballot committee, or any other campaign
                    committee, or otherwise for the purpose of influencing any election. Candidates
                    for political office are not eligible to use any Impakt monetization tool on
                    their channels.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Prohibited Conduct
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    YOU AGREE NOT TO violate any law, contract, intellectual property, or other
                    third-party right; not to commit a tort, and that you are solely responsible for
                    your conduct while on the Impakt Services. You agree that you will comply with
                    these Terms of Service and Impakt’s Community Guidelines and will not:
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    i. Create, upload, transmit, distribute, or store any content that is
                    inaccurate, unlawful, infringing, defamatory, obscene, pornographic, invasive of
                    privacy or publicity rights, harassing, threatening, abusive, inflammatory, or
                    otherwise objectionable.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    ii. Impersonate any person or entity; falsely claim an affiliation with any
                    person or entity; access the Impakt Services accounts of others without
                    permission; forge another person’s digital signature; misrepresent the source,
                    identity, or content of information transmitted via the Impakt Services; or
                    perform any other similar fraudulent activity.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    iii. Send junk mail or spam to users of the Impakt Services, including without
                    limitation unsolicited advertising, promotional materials, or other solicitation
                    material; bulk mailing of commercial advertising, chain mail, informational
                    announcements, charity requests, petitions for signatures, or any of the
                    preceding things related to promotional giveaways (such as raffles and
                    contests); and other similar activities.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    iv. Harvest or collect email addresses or other contact information of other
                    users from the Impakt Services; v. defame, harass, abuse, threaten, or defraud
                    users of the Impakt Services, or collect or attempt to collect, personal
                    information about users or third parties without their consent.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    vi. Delete, remove, circumvent, disable, damage, or otherwise interfere with:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Security-related features of the Impakt Services or User Content
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Features that prevent or restrict use or copying of any content accessible
                      through the Impakt Services.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Features that enforce limitations on the use of the Impakt Services or User
                      Content.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      The copyright or other proprietary rights notices on the Impakt Services or
                      User Content.
                    </ListItem>
                  </UnorderedList>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    vii. Reverse engineer, decompile, disassemble, or otherwise attempt to discover
                    the source code of the Impakt Services or any part thereof, except and only to
                    the extent that this activity is expressly permitted by the law of your
                    jurisdiction of residence.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    viii. Modify, adapt, translate, or create derivative works based upon the Impakt
                    Services or any part thereof, except and only to the extent that such activity
                    is expressly permitted by applicable law notwithstanding this limitation.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    ix. Interfere with or damage the operation of the Impakt Services or any user’s
                    enjoyment of them, by any means, including uploading or otherwise disseminating
                    viruses, adware, spyware, worms, or other malicious code.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    x. Relay email from a third party’s mail servers without the permission of that
                    third party.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    xi. Access any website, server, software application, or other computer resource
                    owned, used, and/or licensed by Impakt, including but not limited to the Impakt
                    Services, by means of any robot, spider, scraper, crawler, or other automated
                    means for any purpose, or bypass any measures Impakt may use to prevent or
                    restrict access to any website, server, software application, or other computer
                    resource owned, used, and/or licensed by Impakt, including but not limited to
                    the Impakt Services;
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    xii. Manipulate identifiers in order to disguise the origin of any User Content
                    transmitted through the Impakt Services.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    xiii. Interfere with or disrupt the Impakt Services or servers or networks
                    connected to the Impakt Services, or disobey any requirements, procedures,
                    policies, or regulations of networks connected to the Impakt Services; use the
                    Impakt Services in any manner that could interfere with, disrupt, negatively
                    affect, or inhibit other users from fully enjoying the Impakt Services, or that
                    could damage, disable, overburden, or impair the functioning of the Impakt
                    Services in any manner.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    xiv. Use or attempt to use another user’s account without authorization from
                    that user and Impakt.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    xv. Attempt to circumvent any content filtering techniques we employ, or attempt
                    to access any service or area of the Impakt Services that you are not authorized
                    to access.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    xvi. Attempt to indicate in any manner, without our prior written permission,
                    that you have a relationship with us or that we have endorsed you or any
                    products or services for any purpose.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    xvii. use the Impakt Services for any illegal purpose, or in violation of any
                    local, state, national, or international law or regulation, including without
                    limitation laws governing intellectual property and other proprietary rights,
                    data protection, and privacy.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    To the extent permitted by applicable law, Impakt takes no responsibility and
                    assumes no liability for any User Content or for any loss or damage resulting
                    therefrom, nor is Impakt liable for any mistakes, defamation, slander, libel,
                    omissions, falsehoods, obscenity, pornography, or profanity you may encounter
                    when using the Impakt Services. Your use of the Impakt Services is at your own
                    risk. In addition, these rules do not create any private right of action on the
                    part of any third party or any reasonable expectation that the Impakt Services
                    will not contain any content that is prohibited by such rules.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Impakt is not liable for any statements or representations included in User
                    Content. Impakt does not endorse any User Content, opinion, recommendation, or
                    advice expressed therein, and Impakt expressly disclaims any and all liability
                    in connection with User Content. To the fullest extent permitted by applicable
                    law, Impakt reserves the right to remove, screen, or edit any User Content
                    posted or stored on the Impakt Services at any time and without notice,
                    including where such User Content violates these Terms of Service or applicable
                    law, and you are solely responsible for creating backup copies of and replacing
                    any User Content you post or store on the Impakt Services at your sole cost and
                    expense. Any use of the Impakt Services in violation of the foregoing violates
                    these Terms of Service and may result in, among other things, termination or
                    suspension of your rights to use the Impakt Services. For Residents of the
                    Republic of Korea, except in the case where Impakt reasonably considers that
                    giving notice is legally prohibited (for instance, when providing notice would
                    either:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Violate applicable laws, regulations, or orders from regulatory authorities.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Compromise an ongoing investigation conducted by a regulatory authority) or
                      that any notice may cause harm to you, third parties, Impakt, and/or its
                      affiliates (for instance, when providing notice harms the security of the
                      Impakt Services), Impakt will without delay notify you of the reason for
                      taking the relevant step.
                    </ListItem>
                  </UnorderedList>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Respecting Copyright
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Impakt, the Impakt logos, and any other product or service name, logo, or slogan
                    used by Impakt, and the look and feel of the Impakt Services, including all page
                    headers, custom graphics, button icons, and scripts, are trademarks or trade
                    dress of Impakt, and may not be used in whole or in part in connection with any
                    product or service that is not Impakt’s, in any manner that is likely to cause
                    confusion among customers, or in any manner that disparages or discredits
                    Impakt, without our prior written permission. Any use of these trademarks must
                    be in accordance with the Impakt Trademark Guidelines. All other trademarks
                    referenced in the Impakt Services are the property of their respective owners.
                    Reference on the Impakt Services to any products, services, processes, or other
                    information by trade name, trademark, manufacturer, supplier, or otherwise does
                    not constitute or imply endorsement, sponsorship, or recommendation thereof by
                    us or any other affiliation.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Third-Party Content
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    In addition to the User Content, Impakt may provide other third-party content on
                    the Impakt Services (collectively, the “Third-Party Content”). Impakt does not
                    control or endorse any Third-Party Content and makes no representation or
                    warranties of any kind regarding the Third-Party Content, including without
                    limitation regarding its accuracy or completeness. Please be aware that we do
                    not create Third-Party Content, update, or monitor it. Therefore we are not
                    responsible for any Third-Party Content on the Impakt Services.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    You are responsible for deciding if you want to access or use third-party
                    websites or applications that link from the Impakt Services (the “Reference
                    Sites”). Impakt does not control or endorse any such Reference Sites or the
                    information, materials, products, or services contained on or accessible through
                    Reference Sites, and makes no representations or warranties of any kind
                    regarding the Reference Sites. In addition, your correspondence or business
                    dealings with, or participation in promotions of, advertisers found on or
                    through the Impakt Services are solely between you and such advertiser. Access
                    and use of Reference Sites, including the information, materials, products, and
                    services on or available through Reference Sites is solely at your own risk.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Idea Submission
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    By submitting ideas, suggestions, documents, and/or proposals (the
                    “Submissions”) to Impakt or its employees, you acknowledge and agree that Impakt
                    shall be entitled to use or disclose such Submissions for any purpose in any way
                    without providing compensation or credit to you.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Termination
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    To the fullest extent permitted by applicable law, Impakt reserves the right,
                    without notice and in our sole discretion, to terminate your license to use the
                    Impakt Services (including to post User Content) and to block or prevent your
                    future access to and use of the Impakt Services, including where we reasonably
                    consider that:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Your use of the Impakt Services violates these Terms of Service or applicable
                      law.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      You fraudulently use or misuse the Impakt Services.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      We are unable to continue providing the Impakt Services to you due to
                      technical or legitimate business reasons. Our right to terminate your license
                      includes the ability to terminate or to suspend your access to any purchased
                      products or services, including any subscriptions, Prime Gaming, or Turbo
                      accounts.
                    </ListItem>
                  </UnorderedList>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    To the fullest extent permitted by applicable law, your only remedy with respect
                    to any dissatisfaction with:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      The Impakt Services.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Any term of these Terms of Service.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Any policy or practice of Impakt in operating the Impakt Services.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Any content or information transmitted through the Impakt Services, is to
                      terminate your account and to discontinue use of any and all parts of the
                      Impakt Services.
                    </ListItem>
                  </UnorderedList>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    For residents of the Republic of Korea, except in the case where Impakt
                    reasonably considers that giving notice is legally prohibited (for instance,
                    when providing notice would either:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Violate applicable laws, regulations, or orders from regulatory authorities.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Compromise an ongoing investigation conducted by a regulatory authority) or
                      that any notice may cause harm to you, third parties, Impakt, and/or its
                      affiliates (for instance, when providing notice harms the security of the
                      Impakt Services), Impakt will without delay notify you of the reason for
                      taking the relevant step.
                    </ListItem>
                  </UnorderedList>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Disputes
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Impakt allows you to distribute streaming live and pre-recorded audio-visual
                    works; to use services, such as chat, bulletin boards, forum postings, wiki
                    contributions, and voice interactive services; and to participate in other
                    activities in which you may create, post, transmit, perform, or store content,
                    messages, text, sound, images, applications, code, or other data or materials on
                    the Impakt Services (“User Content”):
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    a. Indemnification
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    To the fullest extent permitted by applicable law, you agree to indemnify,
                    defend, and hold harmless Impakt, its affiliated companies, and each of our
                    respective contractors, employees, officers, directors, agents, third-party
                    suppliers, licensors, and partners (individually and collectively, the “Impakt
                    Parties”) from any claims, losses, damages, demands, expenses, costs, and
                    liabilities, including legal fees and expenses, arising out of or related to
                    your access, use, or misuse of the Impakt Services, any User Content you post,
                    store, or otherwise transmit in or through the Impakt Services, your violation
                    of the rights of any third party, any violation by you of these Terms of
                    Service, or any breach of the representations, warranties, and covenants made by
                    you herein. You agree to promptly notify the Impakt Parties of any third-party
                    claim, and Impakt reserves the right, at your expense, to assume the exclusive
                    defense and control of any matter for which you are required to indemnify
                    Impakt, and you agree to cooperate with Impakt’s defense of these claims. Impakt
                    will use reasonable efforts to notify you of any such claim, action, or
                    proceeding upon becoming aware of it.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    b. Indemnification
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    To the fullest extent permitted by applicable law:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      The impakt services and the content and materials contained therein are
                      provided on an “as is” basis without warranties of any kind, either express or
                      implied, except as expressly provided to the contrary in writing by impakt.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      The impakt parties disclaim all other warranties, statutory, express, or
                      implied, including but not limited to the implied warranties of
                      merchantability, fitness for a particular purpose, title, and non-infringement
                      as to the impakt services, including any information, content, or materials
                      contained therein.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Impakt does not represent or warrant that the content or materials on the
                      impakt services are accurate, complete, reliable, current, or error-free.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Impakt is not responsible for typographical errors or omissions relating to
                      text or photography.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      While impakt attempts to make your access and use of the impakt services safe,
                      impakt cannot and does not represent or warrant that the impakt services or
                      our server(s) are free of viruses or other harmful components, and therefore,
                      you should use industry-recognized software to detect and disinfect viruses
                      from any download. No advice or information, whether oral or written, obtained
                      by you from impakt or through the impakt services will create any warranty not
                      expressly stated herein.
                    </ListItem>
                  </UnorderedList>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    c. Limitation of Liability and Damages
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    i. Limitation of liability to the fullest extent permitted by applicable law:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      In no event shall impakt or the impakt parties be liable for any direct,
                      special, indirect, or consequential damages, or any other damages of any kind,
                      including but not limited to loss of use, loss of profits, or loss of data,
                      whether in an action in contract, tort (including but not limited to
                      negligence), or otherwise, arising out of or in any way connected with the use
                      of or inability to use the impakt services, the content or the materials,
                      including without limitation any damages caused by or resulting from reliance
                      on any information obtained from impakt, or that result from mistakes,
                      omissions, interruptions, deletion of files or email, errors, defects,
                      viruses, delays in operation or transmission, or any failure of performance,
                      whether or not resulting from acts of god, communications failure, theft,
                      destruction, or unauthorized access to impakt’s records, programs, or
                      services.
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      In no event shall the aggregate liability of impakt, whether in contract,
                      warranty, tort (including negligence, whether active, passive, or imputed),
                      product liability, strict liability, or other theory, arising out of or
                      relating to the use of or inability to use the impakt services exceed the
                      amount paid by you, if any, for accessing the impakt services during the
                      twelve (12) months immediately preceding the date of the claim or one hundred
                      dollars, whichever is greater.
                    </ListItem>
                  </UnorderedList>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    To the extent that applicable law prohibits limitation of such liability, impakt
                    shall limit its liability to the full extent allowed by applicable law.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    ii. Reference Sites these limitations of liability also apply with respect to
                    damages incurred by you by reason of any products or services sold or provided
                    on any reference sites or otherwise by third parties other than impakt and
                    received through or advertised on the impakt services or received through any
                    reference sites.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    iii. Basis of the bargain you acknowledge and agree that impakt has offered the
                    impakt services, user content, materials, and other content and information, set
                    its prices, and entered into these terms of service in reliance upon the
                    warranty disclaimers and limitations of liability set forth herein, that the
                    warranty disclaimers and limitations of liability set forth herein reflect a
                    reasonable and fair allocation of risk between you and impakt, and that the
                    warranty disclaimers and limitations of liability set forth herein form an
                    essential basis of the bargain between you and impakt. Impakt would not be able
                    to provide the impakt services to you on an economically reasonable basis
                    without these limitations.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    d. Applicable Law and Venue
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    (i) To the fullest extent permitted by applicable law, you and Impakt agree that
                    if you are a Subscribing Organization or a consumer resident of a jurisdiction
                    other than those in (ii) below, the following governing law and arbitration
                    provision applies: PLEASE READ THE FOLLOWING CAREFULLY BECAUSE IT REQUIRES YOU
                    TO ARBITRATE DISPUTES WITH IMPAKT AND LIMITS THE MANNER IN WHICH YOU CAN SEEK
                    RELIEF FROM Impakt.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    You and Impakt agree to arbitrate any dispute arising from these Terms of
                    Service or your use of the Impakt Services, except that you and Impakt are not
                    required to arbitrate any dispute in which either party seeks equitable and
                    other relief for the alleged unlawful use of copyrights, trademarks, trade
                    names, logos, trade secrets, or patents.ARBITRATION PREVENTS YOU FROM SUING IN
                    COURT OR FROM HAVING A JURY TRIAL.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    You and Impakt agree that you will notify each other in writing of any dispute
                    within thirty (30) days of when it arises. Notice to Impakt shall be sent to:
                    Impakt, Inc., Attn: Legal, 4546 El Camino Real B10 #618, Los Altos, CA 94022.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    You and Impakt further agree: to attempt informal resolution prior to any demand
                    for arbitration; that any arbitration will occur in the Cayman Islands; that
                    arbitration will be conducted confidentially by a single arbitrator in
                    accordance with the rules of JAMS; and that the courts in the Cayman Islands
                    have exclusive jurisdiction over any appeals of an arbitration award and over
                    any suit between the parties not subject to arbitration. Other than class
                    procedures and remedies discussed below, the arbitrator has the authority to
                    grant any remedy that would otherwise be available in court. Any dispute between
                    the parties will be governed by this Agreement and the laws of the Cayman Island
                    law, without giving effect to any conflict of laws principles that may provide
                    for the application of the law of another jurisdiction. Whether the dispute is
                    heard in arbitration or in court, you and Impakt will not commence against the
                    other a class action, class arbitration, or other representative action or
                    proceeding.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    (ii) If you are a resident in any jurisdiction in which the provision in the
                    section above is found to be unenforceable, then any disputes, claims, or causes
                    of action arising out of or in connection with these Terms of Service will be
                    governed by and construed under the laws of your jurisdiction of residence, and
                    shall be resolved by competent civil courts within your jurisdiction of
                    residence.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    e. Claims
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    You and impakt agree that any cause of action arising out of or related to the
                    impakt services must commence within one (1) year after the cause of action
                    accrues. Otherwise, such cause of action is permanently barred.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="12px">
                    Miscellaneous
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    a. Waiver
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    If we fail to exercise or enforce any right or provision of these Terms of
                    Service, it will not constitute a waiver of such right or provision. Any waiver
                    of any provision of these Terms of Service will be effective only if in writing
                    and signed by the relevant party.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    b. Severability
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    If any provision of these Terms of Service is held to be unlawful, void, or for
                    any reason unenforceable, then that provision will be limited or eliminated from
                    these Terms of Service to the minimum extent necessary and will not affect the
                    validity and enforceability of any remaining provisions.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    c. Assignment
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    These Terms of Service, and any rights and licenses granted hereunder, may not
                    be transferred or assigned by you, but may be assigned by Impakt without
                    restriction. Any assignment attempted to be made in violation of this Terms of
                    Service shall be void.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    d. Survival
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Upon termination of these Terms of Service, any provision which, by its nature
                    or express terms should survive, will survive such termination or expiration,
                    including, but not limited to, Sections 7, 8, 11, 12, and 15-17.
                  </Text>
                  <Text textStyle="bold20" color="#F09941" marginBottom="12px">
                    e. Entire Agreement
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    The Terms of Service, which incorporate the Terms of Sale and the Community
                    Guidelines, is the entire agreement between you and Impakt relating to the
                    subject matter herein and will not be modified except by a writing signed by
                    authorized representatives of both parties, or by a change to these Terms of
                    Service made by Impakt as set forth in Section 6 above.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    17. Specific Terms for Soundtrack by Impakt
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    18.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Soundtrack by Impakt (“Soundtrack”), which is part of the Impakt Services, is a
                    streamer tool designed to give creators the ability to play licensed music in
                    the background of their live streams and upload on-demand videos of those live
                    streams that do not include such music. By downloading, installing, and/or
                    otherwise using Soundtrack, you agree that your download, installation, and/or
                    use of Soundtrack will be governed by these Terms of Service. Impakt’s Community
                    Guidelines and Music Guidelines apply as well, and we recommend that you review
                    both resources prior to using Soundtrack.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Soundtrack was borne out of Impakt’s desire to offer creators a wide variety of
                    licensed music for live streaming. To make this possible, Impakt secured
                    licenses with many different rights holders and continues to do so in order to
                    add new tracks to Soundtrack’s stations and playlists. Impakt also designed
                    Soundtrack to give creators the ability to generate on-demand videos of their
                    live streams that do not include this music.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    The licenses Impakt secured allow Impakt to make these materials available to
                    you for your use in live streams on your Impakt channel. Music and other
                    materials made available through Soundtrack have not been licensed for your use
                    in pre-recorded content, in content that can be streamed on-demand (such as VODs
                    and Clips), or outside the Impakt Services. What this means is that you may not:
                  </Text>
                  <UnorderedList marginBottom="22px">
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Create on-demand content containing materials from Soundtrack – we have
                      designed Soundtrack with this restriction in mind, and proper setup will allow
                      you to create and use music-free on-demand videos of live streams that include
                      Soundtrack music; or
                    </ListItem>
                    <ListItem
                      textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                      color="rgba(255, 255, 255, 0.75)"
                      marginBottom="12px"
                    >
                      Live stream content that includes music or other materials from Soundtrack
                      outside the Impakt Services.
                    </ListItem>
                  </UnorderedList>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Doing any of the above may subject you to a notice of alleged infringement from
                    rights holders and their agents.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="22px"
                  >
                    Last, we want to alert you to the fact that music rights tend to evolve over
                    time. Thus, we reserve the right to modify or remove certain songs or other
                    content from Soundtrack at any time (for example, as necessary to comply with
                    our music licenses or with applicable laws). Impakt takes no responsibility and
                    assumes no liability in connection with your use of Soundtrack.
                  </Text>
                  <Text textStyle="bold20" color="#fff" marginBottom="4px">
                    Value Risks
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Tokens issued by Impakt may drop substantially in value, or may remain illiquid
                    for long periods of time or indefinitely. Impakt cannot guarantee an active
                    secondary market for the exchange of tokens purchased in the token sale. Not all
                    disclosures or statements are being made in this disclaimer section.
                    Participants should review the token sale agreement in its entirety and seek the
                    professional advice of legal counsel and investment professionals.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Tokens may change in value based on a number of factors that are outside our
                    control. There is no guarantee or expectation that tokens will increase in
                    value, provide a return, or have sufficient adoption and liquidity on exchanges.
                    Owning these tokens does not constitute a share of equity or ownership in the
                    company. The token economy is new and exciting. Regulatory circumstances may
                    require that token mechanics be changed or altered.
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold13', md: 'semiBold6' }}
                    color="rgba(255, 255, 255, 0.75)"
                    marginBottom="12px"
                  >
                    Tokens do not have any rights, uses, purpose, attributes, functionalities or
                    features, express or implied, including, without limitation, any uses, purpose,
                    attributes, functionalities or features on the Impakt platform. Company does not
                    guarantee and is not representing in any way to the buyer that the tokens have
                    any rights, uses, purpose, attributes, functionalities or features. Tokens may
                    have no value. The company reserves the right to refuse or cancel token purchase
                    requests at any time at its sole discretion.
                  </Text>
                </Box>
              </HStack>
            </VStack>

            {/* <VStack pos="relative" align="center" justify="center" onClick={show} cursor="pointer">
              <VStack pos="absolute" zIndex={2}>
                <I.Play />
              </VStack>
              <Image
                src={Images.downloadlaptop}
                maxH="636px"
                w="100%"
                pb={{
                  base: '32px',
                  lg: '0',
                }}
                zIndex={1}
              />
              <Gradient />
            </VStack> */}
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(TermsofUseContent);

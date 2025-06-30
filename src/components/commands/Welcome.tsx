
import { getRandomQuote } from "../../utils/quotes";
import { useEffect, useState } from "react";

import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
  _______  .__      ___.   .__                   ___________.__                      .__ 
 \      \ |__|_____\_ |__ |  |__ _____  ___.__. \__    ___/|__|_  _  _______ _______|__|
 /   |   \|  \_  __ \ __ \|  |  \\__  \<   |  |   |    |   |  \ \/ \/ /\__  \\_  __ \  |
/    |    \  ||  | \/ \_\ \   Y  \/ __ \\___  |   |    |   |  |\     /  / __ \|  | \/  |
\____|__  /__||__|  |___  /___|  (____  / ____|   |____|   |__| \/\_/  (____  /__|  |__|
        \/              \/     \/     \/\/                                  \/                
 `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {` 
 _      _  ____  ____  _     ____ ___  _
/ \  /|/ \/  __\/  _ \/ \ /|/  _ \\  \//
| |\ ||| ||  \/|| | //| |_||| / \| \  / 
| | \||| ||    /| |_\\| | ||| |-|| / /  
\_/  \|\_/\_/\_\\____/\_/ \|\_/ \|/_/   
 _____  _  _      ____  ____  _ 
/__ __\/ \/ \  /|/  _ \/  __\/ \
  / \  | || |  ||| / \||  \/|| |
  | |  | || |/\||| |-|||    /| |
  \_/  \_/\_/  \|\_/ \|\_/\_\\_/
   
                                    
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>      </Seperator>
      
        <div>  <Seperator>--QUOTE OF THE DAY : -- </Seperator>
          <p>{quote}</p>
        </div>
        <Seperator>-------------------------</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####\\\`^"7W7^"@####
                 @#@b\\\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\\\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\\\`~~'.#\\\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \\\` 'b 3-
              .<\\\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \\\`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

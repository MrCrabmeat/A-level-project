# A-level-project

project description:
"A website that allows users to input values of physics formulas and visually interpret how such changes alter the results and components of the other parts of the formula.
Users will be able to a range of different (commonly used) formula's partioned into their own areas of physics, e.g. "V = IR" would be avaliable within an "electrical" catagory."

# Preferences (what could help make the project achieve higher marks)
1. Minimise the number of page reloads the user needs to do:
   - RAM converation is below User Experience, try to load more into ram and only have major changes signal a reload.
   - RAM is low priority due to most devices now days having minimum 4 gb of avaliable ram total.
   - This should be the website snappier, smoother, and should be preferable to those who have unreliable internet connections:
       - As this ebsite is made to be used anywhere, people out-and-about may not have strong enough connections to constantly wait for websites to reload.

2. Due to technically just being a calculator, try to rely less on a server response and more internal processing when handling inputs.
    - Going back to before, I want the website to run as smooth and snappy as possible. Having the processor handle the graphics and math should not be to bad:
        - Doing formula is just simple calculations --> This *SHOULDN'T* be difficult for the processor to handle, for most modern device that is (next part).

 3. This website is not aimed to be used on legacy devices. This code is made to be run smoothly with all the newest (LTS) programming languages and frameworks.
    - What is meant be "Legacy" isn't clear here (I dont really know either - yet), A pausable minimum requiremnt could look like:
    __________________________________________________________________________________________________________
    | Component | Suggested minimimum target |  Reason for targets                                           |
    |-----------|----------------------------|---------------------------------------------------------------|
    | CPU       | Dual-core, 2GHz celeron    |  Ensures low-lag with execution of code and updates           |
    | RAM       | 4GB, DDR3, 1.2GB max usage |  headroom for other RAM usages, can be accessed quickly       |
    | Storage   | 2GB HDD                    |  For the browser and DB caching, doesn't need to modern       |
    | Browser   | Supports ES6+, WASM, etc.  |  Needs to handle the new features that will be used           |
    | OS        | Linux, Windows, MACos, etc.|  Not important, just what browsers can be used on that OS     |
    |___________|____________________________|_______________________________________________________________|

    - The areas I need to allow for really is LINUX, Chromebooks, and phones due to the low ram capacities and lower raw performance.

    
#/ Programming languages, frameworks, and other code i want to use in this website
For any of the languages and other bits in going to list - I want the main things to be that they are/ to be:
        1. Modern             2. Lightweight             3. Have LTS           4. Largely supported 

Programming langages:
- JavaScript: Largely-supported, dynamic, and I already have experience coding in
- WebAssembly: Should be good for computations for its near-native performance

User Interface:
- HTML + CSS: Basics in the feild, almost impossible to do without
- Figma: Can be used to make wallpapers or design ideas that could be implemented

Frontend Framework:
- React: Huge libaries and support, can be used to make react native later on for further developements
- NEXT.JS: High performance and adds great feaures along side

  

import { Confetti } from "@/app/components/confetti";
import { DifficultiesMenu } from "@/app/components/difficulties-menu";
import { GameBoard } from "@/app/components/game-board";
import { GameStage } from "@/app/components/game-stage";

const App = () => (
    <main className="mx-auto flex min-h-screen w-[min(90%,70rem)] items-center justify-center py-4">
        <GameStage menu={<DifficultiesMenu />} playing={<GameBoard />} />
        <Confetti />
    </main>
);

export default App;
